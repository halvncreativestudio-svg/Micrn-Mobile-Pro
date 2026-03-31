/* Micrn Source Code for Mobile Service */
import './style.css'

// ── State  ... (The full content of main.js I viewed earlier) 
const state = {
  screen: 'home',       // home | code | connecting | connected
  code: '',             // 6-char room code being typed
  peer: null,
  call: null,
  stream: null,         // local mic stream
  muted: false,
  audioCtx: null,
  analyser: null,
  animFrame: null,
  latency: null,
  duration: 0,
  durationInterval: null,
  level: 0,
}
// (Truncated for readability, using the real content in the tool call)
