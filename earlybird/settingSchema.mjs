import { isEmpty, isValid } from '@nily/utils'
import { v4 } from 'uuid'

function schemaToSetting(schema) {
  const setting = {
    type: schema.type,
    ...schema.default
  }

  // A unique ID for sorting or deleting to avoid conflicting issues
  if (isEmpty(setting.id)) {
    setting.id = v4()
  }

  return setting
}

export function getBlockSetting(schemas) {
  return schemas.reduce((prev, curr) => {
    let setting = isValid(curr.name)
      ? {
        [curr.name]: schemaToSetting(curr)
      }
      : schemaToSetting(curr)

    if (curr.type === 'schema_group' || curr.type === 'schema_link') {
      const children = (curr).children

      if (isValid(children)) {
        const groupSetting = {
          ...schemaToSetting(curr),
          ...getBlockSetting(children)
        }

        if (curr.name) {
          setting[curr.name] = groupSetting
        } else {
          setting = groupSetting
        }
      }
    } else if (curr.type === 'schema_list') {
      const children = (curr).children

      if (isValid(children)) {
        setting[curr.name] = (children).map(c => getBlockSetting([c]))
      }
    }

    return { ...prev, ...setting }
  }, {})
}
