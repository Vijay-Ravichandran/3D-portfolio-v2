import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import {
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillPauseCircle,
} from 'react-icons/ai';
import { useWindowSize } from 'rooks';

import theme from '~/src/theme';
import NavModal from './NavModal';
import useStore from '../../context/mainStore';
import CONFIG from '../../configs';

const { navTitle } = CONFIG;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 30}px;
  margin-left: 15px;
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px none;
  justify-content: center;
  border-right-width: 0px;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const PlayButton = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { innerWidth } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(innerWidth);
  const [playAudio, setPlayingAudio] = useState(true);
  const audio = useRef();
  let userinteraction = 0;

  // Audio autoplay setup (optional)
  // useEffect(() => {
  //   if (!audio.current) {
  //     audio.current = new Audio('audio/music.mp3');
  //     audio.current.loop = true;
  //     document.addEventListener('click', () => {
  //       if (userinteraction) return;
  //       userinteraction++;
  //       audio.current.play();
  //       setPlayingAudio(!audio.current.paused);
  //     });
  //   }
  // }, []);

  useEffect(() => {
    setWindowWidth(innerWidth);
  }, [innerWidth]);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <NavModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      </CSSTransition>

      <MainContainer windowWidth={windowWidth}>
        <PlayButton
          onClick={() => {
            if (audio.current?.paused) {
              audio.current.play();
            } else {
              audio.current.pause();
            }
            setPlayingAudio(!audio.current?.paused);
          }}
        >
          {!playAudio ? (
            <AiFillCaretRight color={theme.colors.primary} size={30} />
          ) : (
            <AiFillPauseCircle color={theme.colors.primary} size={30} />
          )}
        </PlayButton>

        <div>{navTitle}</div>

        <MenuButton onClick={() => setIsOpen(true)}>
          <AiOutlineMenu color={theme.colors.primary} size={30} />
        </MenuButton>
      </MainContainer>
    </>
  );
};

export default NavBar;
