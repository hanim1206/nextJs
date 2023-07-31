/**
 * 인터페이스 모듈로 내보내기
*/
export interface I_myData {
    "data1" : Repo,
    "data2" : Repo,
}

export interface I_allData {
    props : { 
        "data1": myData;
        "data2": myData2;
    }
}