export type Country = {
    name:{
        common: string;
        official?: string;
    };
    region: string;
    subregion: string;
    population: number;
    area: number;
    flags:{
        svg: string;
        png: string;
    };
    description:string;
    capital?: string[];
    languages: Record<string, string>;
    currencies: Record<string, {name:string;symbol:string}>;
    incomeLevel?: string;
}