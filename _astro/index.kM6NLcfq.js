import{j as i}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.CEDmf73i.js";import{S as l}from"./index.BmZSPaUU.js";import{d as c}from"./styled-components.browser.esm.Df8ch1P-.js";const a=c("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${o=>o.show?"visible":"hidden"};
  opacity: ${o=>o.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`,f=()=>{const[o,s]=r.useState(!1),e=r.useCallback(()=>{const t=window.scrollY;!o&&t>350?s(!0):t<=350&&s(!1)},[o]);r.useEffect(()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}),[e]);const n=()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};return i.jsx(a,{onClick:n,show:o,children:i.jsx(l,{src:"scroll-top.svg",width:"20px",height:"20px"})})};export{f as default};
