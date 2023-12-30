interface PDFDataInterface {
    title: string;
    data: Uint8Array;
    createdAt: Date;
}

export default interface PDFInterface {
    title: string;
    data: PDFDataInterface;
    pdfType: string;
    createdAt: Date;
    pdfPath?: string;
}