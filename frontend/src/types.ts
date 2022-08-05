export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

export type Game = {
    id: number;
    title: string;
    platform: Platform;
}

export type ChartItem = {
    x: string;
    y: number;
}

export type PieChartData = {
    labels: string[];
    series: number[];
}

export type BarChartData = {
    x: string;
    y: number;
}

export type Platform = "PC" | "PLAYSTATION" | "XBOX";