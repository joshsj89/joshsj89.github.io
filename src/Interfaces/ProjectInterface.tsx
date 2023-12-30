export default interface ProjectInterface {
    "_id"?: string;
    "__v"?: number
    name: string;
    order: number;
    description: string;
    image: string;
    link: string;
    tech: string[];
}