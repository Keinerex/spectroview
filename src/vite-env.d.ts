/// <reference types="vite/client" />

type SearchResult = {
  class: string;
  group: string;
  range: string;
  intensity: string;
  comments: string;
  filterRanges: Array<[number, number]>
}