export class Testimony{
    constructor(
        public title: string,
        public tag: string ,
        public url: string,
        public infoText: string,
        public isTestimonies:boolean,
        public transcriptSTR:Transcriptstr[], 
        public transcriptDOC:object,
        public moreInfo:object,
        public images:object,
        public resources:Resource[]
    ){}
}
export class Transcriptstr{
    constructor(
        public transcript: string,
        public fromTime: string,
        public toTime: string,
        public subTitle:string,
        public fromSecond:string,
    ){}
}
export class Resource{
    constructor(
        public title: string,
        public url: object,
        public urlTitle: object,
        public type: string,
        public elements: object
        ,
    ){}
}