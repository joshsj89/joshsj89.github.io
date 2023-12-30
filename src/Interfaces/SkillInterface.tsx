/** Skill Object Interface */
export default interface SkillInterface {
    /** (Optional) The id of the skill */
    "_id"?: string;
    /** (Optional) The version of the skill */
    "__v"?: number;
    /** The name of the skill */
    name: string;
    /** The order number of the skill */
    order: number;
    /** The description of the skill */
    description: string;
    /** The images of the skill */
    images: string[];
    /** The alternate textx of the skill */
    alts: string[];
    /** The classes of the skill */
    classes: string[];
};