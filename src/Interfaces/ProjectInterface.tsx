/** Project Object Interface */
export default interface ProjectInterface {
    /** (Optional) The id of the project */
    "_id"?: string;
    /** (Optional) The version of the project */
    "__v"?: number
    /** The name of the project */
    name: string;
    /** The order number of the project */
    order: number;
    /** The description of the project */
    description: string;
    /** The image of the project */
    image: string;
    /** The redirect link of the project */
    link: string;
    /** The technologies of the project */
    tech: string[];
}