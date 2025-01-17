import type { DiscordStageInstance } from '@discordeno/types'
import type { Bot } from '../index.js'
import type { Optionalize } from '../optionalize.js'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function transformStageInstance(bot: Bot, payload: DiscordStageInstance) {
  const stageInstance = {
    id: bot.transformers.snowflake(payload.id),
    guildId: bot.transformers.snowflake(payload.guild_id),
    channelId: bot.transformers.snowflake(payload.channel_id),
    topic: payload.topic,
    guildScheduledEventId: payload.guild_scheduled_event_id ? bot.transformers.snowflake(payload.guild_scheduled_event_id) : undefined,
  }

  return stageInstance as Optionalize<typeof stageInstance>
}

export interface StageInstance extends ReturnType<typeof transformStageInstance> {}
