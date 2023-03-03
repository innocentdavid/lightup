import { Header } from '../../build/header'
import { Hero } from '../../build/hero'
import { Feature } from '../../build/feature'
import { getBlockSetting } from '../../earlybird/settingSchema.mjs'

export default function Home() {
  return (
    <div>
      <Header.render data={{ setting: getBlockSetting(Header.settingSchemas) }} />
      <Hero.render data={{ setting: getBlockSetting(Hero.settingSchemas) }} />
      <Feature.render data={{ setting: getBlockSetting(Feature.settingSchemas) }} />
    </div>
  )
}