import React from 'react';
import { FooterContainer, LinkStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, faHouse, faPhone, faRss, faS } from '@fortawesome/free-solid-svg-icons'; // 필요한 아이콘을 가져옵니다.
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>SiteMap</h2>
          <h2 style={{ marginRight: '190px' }}>SNS</h2>
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            <LinkStyle href="https://spartacodingclub.kr/" target="_blank" style={{ marginRight: '30px' }}>
              <FontAwesomeIcon icon={faHouse} fade style={{ marginRight: '10px' }} />
              스파르타코딩클럽
            </LinkStyle>
            <LinkStyle
              href="https://github.com/HyperQuanx/rollingpaper"
              target="_blank"
              style={{ marginRight: '30px' }}
            >
              <FontAwesomeIcon icon={faGithub} fade style={{ marginRight: '10px' }} />
              FrontEnd Github
            </LinkStyle>
            <LinkStyle
              href="https://github.com/ayoung-jeon/Rolling-Paper"
              target="_blank"
              style={{ marginRight: '30px' }}
            >
              <FontAwesomeIcon icon={faGithub} fade style={{ marginRight: '10px' }} />
              BackEnd Github
            </LinkStyle>
            <FontAwesomeIcon icon={faS} fade />
            &nbsp;
            <FontAwesomeIcon icon={faA} fade />
            <LinkStyle
              href="https://www.notion.so/2-SA-83628c1faf524c5b935d99ffd0878a76"
              target="_black"
              style={{ marginLeft: '10px' }}
            >
              2조 미니 프로젝트 SA
            </LinkStyle>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <LinkStyle
                href="https://teamsparta.notion.site/247d57da1322424d8e8c551df21a048e"
                target="_blank"
                style={{ marginRight: '30px' }}
              >
                서비스 이용약관
              </LinkStyle>
              <LinkStyle href="https://teamsparta.notion.site/7b1dc644460946f08bab08b794de685f" target="_blank">
                개인정보 처리방침
              </LinkStyle>
            </div>
          </span>
          <div>
            <span>
              <LinkStyle href="https://dreamroqkfwk.tistory.com/" target="_blank">
                <FontAwesomeIcon icon={faRss} fade />
                <span style={{ marginLeft: '10px', fontSize: '20px', marginRight: '30px' }}>Blog</span>
              </LinkStyle>
              <FontAwesomeIcon icon={faPhone} fade />
              <span style={{ marginLeft: '10px', fontSize: '20px' }}>010-8904-4623</span>
            </span>
            <div>
              <FontAwesomeIcon icon={faInstagram} fade style={{ marginTop: '15px', fontSize: '20px' }} />
              <LinkStyle
                href="https://instagram.com/duk_dragon9?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
                target="_black"
              >
                <span style={{ marginLeft: '10px', fontSize: '20px' }}>Instagram</span>
              </LinkStyle>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
