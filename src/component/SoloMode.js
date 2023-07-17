import React, {Component, useState} from 'react';
import unitdata from "./UnitData";


export default function SoloMode(){    

    let charactername = [
        "?",
        "고양이", "탱크 고양이","배틀 고양이","징글 고양이","황소 고양이",
        "고양이 새", "고양이 피쉬", "고양이 도마뱀", "거신 고양이", "고양이 초인",
        "고양이 닌자", "스모 고양이", "고양이 무사", "고양이 좀비", "고양이 한박스",
        "고양이 피버", "고양이 밧줄", "여왕 고양이", "쿵후 냥코", "고양이 여배우",
        "고양이 세발자전거", "고양이 스커트", "고양이 팬티", "Mr.", "콩콩 냥코",
        "귀여미", "광란의 귀여미", "고양이 플라워", "고양이 닌자~청~", "태권도 냥코",
        "기념주화 고양이", "고양이 농가", "골드바 고양이", "장수풍뎅이 고양이", "사슴벌레 고양이"
    ]
    /*폭죽 고양이
    소꿉친구 냥코
    말괄량이 고양이 라이온
    고양이 칠판지우개
    오래된 알:N001
    오래된 알:N201
    오래된 알:N003
    오래된 알:N202
    오래된 알:N004
    가왕 냥코
    저세상 냥코

    꼬맹이 고양이
    꼬맹이 탱크 고양이
    꼬맹이 배틀 고양이
    꼬맹이 징글 고양이
    꼬맹이 황소 고양이
    꼬맹이 고양이 새
    꼬맹이 고양이 피쉬
    꼬맹이 고양이 도마뱀
    꼬맹이 거신 고양이

    고양이 발키리
    고양이 무트
    격 신
    필리버스터X
    자간드 Jr
    울프와 우루룬
    꼬맹이 야옹마
    고양이 냥미
    무사시
    고양이 라이더 맴매
    이디:N
    토우전사 도그마루
    펜리르와 우르스
    고대 가면신 드론
    고대수 나라
    오래된 알:N000
    고양이 신선
    수수께끼의 가면 우라라
    달인 우리르

    (레어)
    고양이 운동회
    고양리맨
    순록피쉬
    냥코 성인
    내가 도깨비라오
    냥코 부부
    고양이 소녀
    물 만난 물고기
    마담 더 신부
    여왕님의 휴일
    처녀귀신 냥코
    쿵후 냥코 G
    마시멜로 냥코
    냥코 카트R
    고양이 형제S
    냥프킨
    고양이의 선물
    냥코 오도리
    타코야끼냥
    살의의 고양이
    고양이 에그
    민달팽이 고양이

    고양이브 론즈
    고양이와 우주
    고양이 줄넘기
    꼭두각시 냥코
    고양이 훌라
    군악대장
    고양이 스톤
    고양이 발레
    유리 고양이
    유모차 고양이
    고대 고양이
    슈퍼 고양이
    고양이 메두사
    고양이 슬라임
    고양이 코사크
    네코쿠마
    럭비 고양이
    팬텀 고양이
    고양이 베이커리
    스톤 고양이
    악마연구가
    고양이 하멜론
    고양이 서예
    오래된 알:N101
    오래된 알:N102
    오래된 알:N103
    오래된 알:N104
    오래된 알:N105
    오래된 알:N106

    (슈퍼 레어)
    광란의 고양이
    광란의 탱크 고양이
    광란의 배틀 고양이
    광란의 징글 고양이
    광란의 황소 고양이
    광란의 고양이 새
    광란의 고양이 피쉬
    광란의 고양이 도마뱀
    광란의 거신 고양이

    냥웨이
    고양이 타이푼
    냥코 우등
    고양이 야구
    치어리더 냥코

총 139 종류
*/
    let Normal = 10;
    let Ex = 64;
    let Rare = 52;
    let SR = 14;
    
    let [Cnum, Numbering] = useState([0,0,0,0,0,0,0,0,0,0]);
    let [showname, Naming] = useState("-");

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
    }

    function getCharacter(){
        let num;
        let rarity = getRandom(1, 1000);
        if(rarity<=1000) num = getRandom(1, Normal);
        else if(rarity<=500) num = getRandom(1, Ex) + Normal;
        else if(rarity<=900) num = getRandom(1, Rare) + Normal + Ex;
        else num = getRandom(1, SR) + Normal + Ex + Rare;

        return num;
    }

    const Randnumber = () => {
        let characterarray = [];
        let flag;
        for(let i=0; i<10; i++)
        {
            let num;
            flag = false;

            while(!flag)
            {
                num = getCharacter();
                flag = true;
                for(let j=0; j<i; j++)
                {
                    if(characterarray[j]==num)
                    {
                        flag = false;
                    }
                }
            }
            characterarray[i]=num;
        }
        Numbering(characterarray);
    }
    
    const characterlist = Cnum.map((index) => {
        return <article><img className="unit" alt="image" src={unitdata.data.units[index].imgurl} onMouseOver={() => {Naming(unitdata.data.units[index].name);}}/></article>
    })

    return(
        <div>
            <div className="SoloCharacterbox">
                {characterlist}
            </div>
            <p className="mobname">{showname}</p>
            <button className='summon' onClick={Randnumber}>캐릭터 뽑기</button>
        </div>
    )
}