import { writable } from "svelte/store";

export const countries = writable([]);

export const searchRegion = writable({ searched: "", region: "" });
