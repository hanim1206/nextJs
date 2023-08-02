/**
 * 메인페이지 이미지 인터페이스
*/
export interface ImgInterface{
    frontImg: string;
    bgImg: string;
}
/**
 * 메인페이지 슬라이드 인터페이스
 */
export interface I_MainSlideItem {
topTxt: string;
mainTxt: string;
btmTxt: string;
btn: string[];
img: ImgInterface;
color?:string,
}
////////////////////////////////////////////////////////////
/**
 * 메인페이지 프로젝트 인터페이스
 */
 export interface I_project{
    img: string;
    title: string;
    desc: string;
    delay: number;
}
////////////////////////////////////////////////////////////
/**
 * 인덱스로 전달되는 서버사이드 데이터들
 */
export interface I_allDataProps{
    content1: I_MainSlideItem[];
    content3: I_project[];
}
/**
 * 서버사이드 데이터를 프롭스 객체로 묶었다
 */
export interface I_allData {
    props : I_allDataProps
}
////////////////////////////////////////////////////////////
/**
 * I_MainSlideItem 프롭으로 받는 애들의 인터페이스
 */
export interface I_propsForMainSlideItem{
    data : I_MainSlideItem[]
}
/**
 * I_project 프롭으로 받는 애들의 인터페이스
 */
export interface I_propsForI_project{
    data : I_project[]
}
////////////////////////////////////////////////////////////
