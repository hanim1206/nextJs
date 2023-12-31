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
 * 상품 리스트
 */
export interface I_productList{
    key: number;
    id: number;
    name: string;
    desc:string;
    src: string; 
}
/**
 * 기존 I_productList에 id값 추가하여 확장
 */
// export interface I_productListWithId extends I_productList{
//     id: number;
// }
export interface I_basketItem{
    name: string;
    itemInfo: I_productList;
    number: number;
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
/**
 * 리뷰 형태
*/
export interface I_singleReview {
    title: string;
    content: string;
};
////////////////////////////////////////////////////////////
/**
 * 리듀서 인터페이스
*/
export interface I_counterReducer{
    counter : number,
}
export interface I_themeReducer{
    theme : string,
}
export interface I_prdReducer{
    prdList : I_productListWithId[],
}
export interface I_reviewReducer{
    reviewList: {
        title: string;
        content: string;
        id: number;
    }[]
}
export interface I_stateProps {
    counterReducer: I_counterReducer,
    themeReducer: I_themeReducer,
    basketReducer: I_prdReducer,
    reviewReducer: I_reviewReducer,
}
////////////////////////////////////////////////////////////
