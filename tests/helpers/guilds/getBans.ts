import { Bot } from "../../../src/bot.ts";
import { CreateGuildChannel } from "../../../src/types/guilds/create_guild_channel.ts";
import { DiscordChannelTypes } from "../../../src/types/mod.ts";
import { assertExists, assertEquals } from "../../deps.ts";
import { delayUntil } from "../../utils.ts";
import { getAvailableVoiceRegions } from "../../../src/helpers/guilds/get_available_voice_regions.ts";

export async function getBansTests(bot: Bot, guildId: bigint, t: Deno.TestContext) {
  await bot.helpers.ban(guildId, 416477607966670869n);
  await bot.helpers.ban(guildId, 635383782576357407n);

  const fetchedBans = await bot.helpers.getBans(guildId);

  // Assertions
  assertExists(fetchedBans);

  if (fetchedBans.size === 0) {
    throw new Error("getBans didn't return any ban, but it should have returned at least 2 bans!");
  }
}