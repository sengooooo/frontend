import Footer from "../footer/footer";
import logo from '../images/Group 972.svg'
import prj1 from '../images/prj1.png'
import prj2 from '../images/prg2.png'
import left from '../images/leftArrow.svg'
import right from '../images/rightArrow.svg'
import prj3 from '../images/prj3.png'
import prj4 from '../images/prj4.PNG'
import prj5 from '../images/prj5.PNG'
import prj6 from '../images/prj6.PNG'
import React, {useState} from 'react';

function EleventhProject(){

    const [currentIndex, setCurrentIndex] = useState(0);
    var page=currentIndex+1;

    const projectData = [
        {
            image: prj1,
            title: "인생선배",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
        },


        {
            image: prj2,
            title: "소확행",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },

        {
            image: prj3,
            title: "모아",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },


        {
            image: prj4,
            title: "LISA MATE",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },

        {
            image: prj5,
            title: "채기랑",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },

        {
            image: prj6,
            title: "곰곰이",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },
    ];

    

    const logoContainerStyle={
        height: '80px',
        flexShrink: '0',
        background: 'linear-gradient(270deg, #191B24 86%, #FF7710 100%)',
        display:'flex',
        paddingLeft: '20px'
    }

    const titleStyle={
        color: 'var(--White, #FFF)',
        fontFamily: 'Pretendard',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:'26px',
        marginLeft:'11px'
    }

    const imgStyle={
        width: '332px',
        height: '188px',
        flexShrink: '0',
        borderRadius:'8px',
        marginTop:'63px',
        marginLeft:'43px'
    }

    const pageStyle={
        display: 'flex',
        gap: '13px',
        alignItems:'center',
        marginTop:'18px',
        marginLeft:'330px'
    }

    const pageFontStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal'
    }

    const arrowStyle={
        width: '6px',
        height: '12px',
        flexShrink: '0',
        cursor: 'pointer'
    }

    const projectTitleStyle={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:'24px',
        marginLeft:'48px',
    }

    const subtitleStyle={
        color: '#BFC4D8',
        fontFamily: 'Pretendard',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginLeft:'48px',
        marginTop:'8px'
    }

    const explainStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%',
        marginLeft:'48px',
        marginTop:'8px'
    }

    const exStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%',
        marginLeft:'48px',
        marginTop:'12px'
    }

    const interviewStyle={
        width: '332px',
        height: '132px',
        flexShrink: '0',
        borderRadius: '8px',
        background: '#2A2A3A',
    }

    const interviewContainerStyle={
        display:'flex',
        flexDirection:'column',
        marginTop:'56px',
        marginLeft:'48px',
        gap:'8px',
        marginBottom:'100px'
    }

    const interviewNameStyle={
        color: '#BFC4D8',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        marginBottom:'8px',
        marginTop:'16px',
        marginLeft:'15px'
    }

    const interviewContentStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '10.5px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '170%',
        marginLeft:'15px'
    }

    const handleNext = () => {
        if (currentIndex < 5) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const interviewsToShow = currentIndex === 0 ? 5 : 6;

    const interviews = [];
    for (let i = 1; i <= interviewsToShow; i++) {
    interviews.push(
        <div style={interviewStyle} key={i}>
            <div style={interviewNameStyle}>{projectData[currentIndex][`interviewName${i}`]}</div>
            <div style={interviewContentStyle}>{projectData[currentIndex][`interview${i}`]}</div>
        </div>
        );
    }

    return(
        <>
        
        <div style={logoContainerStyle}>
            <img src={logo}/>
            <div style={titleStyle}>11기 프로젝트</div>
        </div>

        <div><img src={projectData[currentIndex].image} style={imgStyle}/></div>
        
        <div style={pageStyle}>
            <img src={left} style={arrowStyle} onClick={handlePrev}/>
            <div style={pageFontStyle}>{page}</div>
            <img src={right} style={arrowStyle} onClick={handleNext}/>
        </div>

        <div style={projectTitleStyle}>{projectData[currentIndex].title}</div>
        <div style={subtitleStyle}>{projectData[currentIndex].subtitle}</div>
        <div style={explainStyle}>
        {projectData[currentIndex].explanation}
        </div>
        <div style={exStyle}>참가자 : {projectData[currentIndex].participants}</div>
        <div style={exStyle}>사용 툴 : {projectData[currentIndex].tools}</div>
        <div style={exStyle}>웹 링크 : {projectData[currentIndex].webLink}</div>

        <div style={interviewContainerStyle}>
        {interviews}
        </div>

        <Footer/>
        </>
    );
}

export default EleventhProject;