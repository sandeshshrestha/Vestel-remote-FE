import React from "react"
import {
  BsPower, BsYoutube,
  BsFillCaretUpFill, BsFillCaretRightFill, BsFillCaretDownFill, BsFillCaretLeftFill,
  BsFillVolumeMuteFill,
  BsStopFill, BsPauseFill, BsPlayFill,
  BsFillRecordFill, BsStarFill,
} from 'react-icons/bs'
import { SiNetflix } from 'react-icons/si'
import { AiFillHome } from 'react-icons/ai'
import { MdFitScreen, MdPermMedia, MdOutlineScreenSearchDesktop, MdInput } from 'react-icons/md'
import { HiRewind, HiFastForward } from 'react-icons/hi'
import { BsBlockquoteLeft, BsArrowRepeat } from 'react-icons/bs'
import { MdSubtitles } from 'react-icons/md'

import Layout from "../components/layout"
import SEO from "../components/seo"
import callApi from "../utils/callApi"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="button-group button-group-3">
      <button
        title="Power"
        className="with-padding"
        onClick={() => callApi('button_power')}
        style={{
          backgroundColor: '#ff6161',
          color: '#fff',
        }}>
        <BsPower />
      </button>
      <button
        title="Netflix"
        className="with-padding"
        onClick={() => callApi('button_home')} // TODO: Find actual code of netflix
        style={{
          backgroundColor: '#ef0914',
          color: '#fff',
        }}>
        <SiNetflix />
      </button>
      <button
        title="Youtube"
        className="with-padding"
        onClick={() => callApi('button_youtube')}
        style={{
          backgroundColor: '#ff0000',
          color: '#fff',
        }}>
        <BsYoutube />
      </button>
    </div>
    <div className="button-group button-group-3">
      <button
        title="Menu"
        className="with-border with-padding long-text"
        onClick={() => callApi('button_menu')}>
        Menu
      </button>
      <button
        title="Up"
        onClick={() => callApi('button_up')}>
        <BsFillCaretUpFill />
      </button>
      <button
        title="QMenu"
        className="with-border with-padding long-text"
        onClick={() => callApi('button_qmenu')}>
        QMenu
      </button>
      <button
        title="Left"
        onClick={() => callApi('button_left')}>
        <BsFillCaretLeftFill />
      </button>
      <button
        title="OK"
        className="with-border short-text circle"
        onClick={() => callApi('button_ok')}>OK</button>
      <button
        title="Right"
        onClick={() => callApi('button_right')}>
        <BsFillCaretRightFill />
      </button>
      <button
        title="Back"
        className="with-border with-padding long-text"
        onClick={() => callApi('button_back')}>
        Back
      </button>
      <button
        title="Down"
        onClick={() => callApi('button_down')}>
        <BsFillCaretDownFill />
      </button>
      <button
        title="Exit"
        className="with-border with-padding long-text"
        onClick={() => callApi('button_exit')}>
        Exit
      </button>
    </div>
    <div className="button-group button-group-3">
      <button
        title="Volume up"
        className="with-border with-padding short-text"
        onClick={() => callApi('button_vol_up')}>
        V+
      </button>
      <button
        title="Toggle mute"
        className="with-border with-padding"
        onClick={() => callApi('button_mute')}>
        <BsFillVolumeMuteFill />
      </button>
      <button
        title="Program up"
        className="with-border with-padding short-text"
        onClick={() => callApi('button_prog_up')}>P+</button>
      <button
        title="Volume down"
        className="with-border with-padding short-text"
        onClick={() => callApi('button_vol_down')}>
        V-
      </button>
      <button
        title="Info"
        className="with-border with-padding short-text"
        onClick={() => callApi('button_info')}>
        i
      </button>
      <button
        title="Program down"
        className="with-border with-padding short-text"
        onClick={() => callApi('button_prog_down')}>P-</button>
    </div>
    <div className="button-group button-group-3">
      <button
        title="Home"
        className="with-border with-padding"
        onClick={() => callApi('button_home')}>
          <AiFillHome />
        </button>
      <button
        title="Media browser"
        className="with-border with-padding"
        onClick={() => callApi('button_mmedia')}>
          <MdPermMedia />
      </button>
      <button
        title="EPG"
        className="with-border with-padding"
        onClick={() => callApi('button_epg')}>
          <MdOutlineScreenSearchDesktop />
      </button>
      <button
        title="My button"
        className="with-border with-padding"
        onClick={() => callApi('button_youtube')}>
        <BsStarFill />
      </button> 
        {/* Was supposed to be a button that we can set, but was used as youtube */}
      <button
        title="Sources"
        className="with-border with-padding"
        onClick={() => callApi('button_source')}>
        <MdInput />
      </button>
      <button
        title="Teletext"
        className="with-border with-padding short-text"
        onClick={() => callApi('button_text')}>
        <BsBlockquoteLeft />
      </button>
    </div>
    <div className="button-group button-group-4">
      <button
        title="Red"
        className="with-padding with-border"
        style={{
          backgroundColor: 'red'
        }}
        onClick={() => callApi('button_red')} />
      <button
        title="Green"
        className="with-padding with-border"
        style={{
          backgroundColor: 'green'
        }}
        onClick={() => callApi('button_green')} />
      <button
        title="Yellow"
        className="with-padding with-border"
        style={{
          backgroundColor: 'yellow'
        }}
        onClick={() => callApi('button_yellow')} />
      <button
        title="Blue"
        className="with-padding with-border"
        style={{
          backgroundColor: '#0c54ff'
        }}
        onClick={() => callApi('button_blue')} />
    </div>
    <div className="button-group button-group-3">
      <button
        title="Stop"
        className="with-border with-padding long-text"
        onClick={() => callApi('button_lang')}>
        LANG
      </button>
      <button
        title="Subtitle"
        className="with-border with-padding"
        onClick={() => callApi('button_subtitle')}>
        <MdSubtitles />
      </button>
      <button
        title="Screen"
        className="with-border with-padding"
        onClick={() => callApi('button_screen')}>
        <MdFitScreen />
      </button>
      <button
        title="Rewind"
        className="with-border with-padding"
        onClick={() => callApi('button_rewind')}>
        <HiRewind />
      </button>
      <button
        title="Pause"
        className="with-border with-padding"
        onClick={() => callApi('button_pause')}>
        <BsPauseFill />
      </button>
      <button
        title="Fast Forward"
        className="with-border with-padding"
        onClick={() => callApi('button_forward')}>
        <HiFastForward />
      </button>
      <button
        title="Record"
        className="with-border with-padding"
        onClick={() => callApi('button_record')}>
        <BsFillRecordFill />
      </button>
      <button
        title="Play"
        className="with-border with-padding"
        onClick={() => callApi('button_play')}>
        <BsPlayFill />
      </button>
      <button
        title="Stop"
        className="with-border with-padding"
        onClick={() => callApi('button_stop')}>
        <BsStopFill />
      </button>
    </div>
    <div className="button-group button-group-3">
      <button
        title="One"
        className="with-border with-padding"
        onClick={() => callApi('button_1')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        1
      </button>
      <button
        title="Two"
        className="with-border with-padding"
        onClick={() => callApi('button_2')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        2
      </button>
      <button
        title="Three"
        className="with-border with-padding"
        onClick={() => callApi('button_3')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        3
      </button>
      <button
        title="Four"
        className="with-border with-padding"
        onClick={() => callApi('button_4')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        4
      </button>
      <button
        title="Five"
        className="with-border with-padding"
        onClick={() => callApi('button_5')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        5
      </button>
      <button
        title="Six"
        className="with-border with-padding"
        onClick={() => callApi('button_6')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        6
      </button>
      <button
        title="Seven"
        className="with-border with-padding"
        onClick={() => callApi('button_7')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        7
      </button>
      <button
        title="Eight"
        className="with-border with-padding"
        onClick={() => callApi('button_8')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        8
      </button>
      <button
        title="Nine"
        className="with-border with-padding"
        onClick={() => callApi('button_9')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        9
      </button>
      <button
        title="TV"
        onClick={() => callApi('button_chan')}
        className="with-border short-text">TV</button>
      <button
        title="Zero"
        className="with-border with-padding"
        onClick={() => callApi('button_0')}
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        0
      </button>
      <button
        title="Swap"
        className="with-border with-padding"
        onClick={() => callApi('button_swap')}>
        <BsArrowRepeat />
      </button>
    </div>
  </Layout>
)

/*
  "BUTTON_PRESETS": "1014",
  "BUTTON_EPG": "1047",
  "BUTTON_MMEDIA": "1057",
  "BUTTON_SOURCE": "1056",
  "BUTTON_CHAN": "1045",
*/

export default IndexPage