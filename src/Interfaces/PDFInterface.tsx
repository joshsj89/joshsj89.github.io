/** PDF Data Interface */
interface PDFDataInterface {
    /** The title of the PDF */
    title: string;
    /** The buffer data of the PDF in `Uint8Array` format */
    data: Uint8Array;
    /** The date the PDF was created */
    createdAt: Date;
}

/** PDF Object Interface */
export default interface PDFInterface {
    /** The title of the PDF */
    title: string;
    /** The data of the PDF */
    data: PDFDataInterface;
    /** The file type (just to double check) */
    pdfType: string;
    /** The date the PDF was created */
    createdAt: Date | string;
    /** (Optional) The path of the PDF */
    pdfPath?: string;
}