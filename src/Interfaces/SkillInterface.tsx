export default interface SkillInterface {
    "_id"?: string;
    "__v"?: number;
    name: string;
    order: number;
    description: string;
    images: string[];
    alts: string[];
    classes: string[];
};