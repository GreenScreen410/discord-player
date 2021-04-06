import { downloadOptions } from 'ytdl-core';
import { User } from 'discord.js';

export interface PlayerOptions {
    leaveOnEnd?: boolean;
    leaveOnEndCooldown?: number;
    leaveOnStop?: boolean;
    leaveOnEmpty?: boolean;
    leaveOnEmptyCooldown?: number;
    autoSelfDeaf?: boolean;
    enableLive?: boolean;
    ytdlDownloadOptions?: downloadOptions;
    useSafeSearch?: boolean;
}

export type FiltersName =
    | 'bassboost'
    | '8D'
    | 'vaporwave'
    | 'nightcore'
    | 'phaser'
    | 'tremolo'
    | 'vibrato'
    | 'reverse'
    | 'treble'
    | 'normalizer'
    | 'surrounding'
    | 'pulsator'
    | 'subboost'
    | 'karaoke'
    | 'flanger'
    | 'gate'
    | 'haas'
    | 'mcompand'
    | 'mono'
    | 'mstlr'
    | 'mstrr'
    | 'compressor'
    | 'expander'
    | 'softlimiter'
    | 'chorus'
    | 'chorus2d'
    | 'chorus3d'
    | 'fadein';

export type TrackSource = 'soundcloud' | 'youtube' | 'arbitrary';

export interface TrackData {
    title: string;
    description: string;
    author: string;
    url: string;
    thumbnail: string;
    duration: string;
    views: number;
    requestedBy: User;
    fromPlaylist: boolean;
    source?: TrackSource;
    engine?: any;
}

export type QueueFilters = {
    bassboost: boolean;
    '8D': boolean;
    vaporwave: boolean;
    nightcore: boolean;
    phaser: boolean;
    tremolo: boolean;
    vibrato: boolean;
    reverse: boolean;
    treble: boolean;
    normalizer: boolean;
    surrounding: boolean;
    pulsator: boolean;
    subboost: boolean;
    karaoke: boolean;
    flanger: boolean;
    gate: boolean;
    haas: boolean;
    mcompand: boolean;
    mono: boolean;
    mstlr: boolean;
    mstrr: boolean;
    compressor: boolean;
    expander: boolean;
    softlimiter: boolean;
    chorus: boolean;
    chorus2d: boolean;
    chorus3d: boolean;
    fadein: boolean;
};

export type QueryType =
    | 'soundcloud_track'
    | 'soundcloud_playlist'
    | 'spotify_song'
    | 'spotify_album'
    | 'spotify_playlist'
    | 'youtube_video'
    | 'youtube_playlist'
    | 'vimeo'
    | 'facebook'
    | 'reverbnation'
    | 'attachment'
    | 'youtube_search';
