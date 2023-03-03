export function textSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_html',
        default: {
            ...(schema).default,
            type: 'text'
        }
    }

    if (result.name) {
        return result
    }

    return result
}

export function htmlSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_html',
        default: {
            ...(schema).default,
            type: 'html'
        }
    }

    if (result.name) {
        return result
    }

    return result
}

export function iconSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_icon'
    }

    if (result.name) {
        return result
    }

    return result
}

export function imageSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_image',
        default: {
            ...(schema).default,
            type: 'image'
        }
    }

    if (result.name) {
        return result
    }

    return result
}

export function linkSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_link',
        default: {
            ...(schema).default,
            type: 'link'
        },
        children: []
    }

    if (result.name) {
        return result
    }

    return result
}

export function mediaSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_media'
    }

    if (result.name) {
        return result
    }

    return result
}

export function videoSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_video',
        default: {
            ...(schema).default,
            type: 'video'
        }
    }

    if (result.name) {
        return result
    }

    return result
}

export function groupSettingSchema(schema) {
    const result = {
        ...(schema),
        type: 'schema_group',
        children: []
    }

    if (result.name) {
        return result
    }

    return result
}

export function listSettingSchema(schema) {
    return {
        ...schema,
        type: 'schema_list',
        children: []
    }
}
