import{j as w,d as vt,W as gt,i as Tt,B as xt,c8 as Et,bC as Ct,bc as At}from"./iframe-DS5VyXLs.js";import{u as St,a as kt,b as Ot,D as Lt,c as qt,S as Ht,h as _t}from"./ToggleGroup-Cthcbmic.js";import{c as It}from"./workspaces-BLRlQP3Y.js";import{w as Nt,r as tt,b as dt}from"./windowDrag-CST91wMS.js";import{P as Ft}from"./meta-BWzge-eA.js";import{b as Dt,c as jt,S as wt,d as Gt,T as bt}from"./RightSidebar-C9xoLIA6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";const{expect:n,userEvent:u,waitFor:v,within:d}=__STORYBOOK_MODULE_TEST__,M="Investigate the long-running background task and its unexpected startup behaviour",W=It({id:"side-title",name:"internal-side-name",projectName:"demo",title:M}),Mt={workspaceMetadata:new Map([[W.id,W]]),loading:!1,loaded:!0,loadError:null};function pt(e){const t=vt.c(60);let o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o={activationConstraint:{distance:8}},t[0]=o):o=t[0];const a=St(kt(Ot,o)),[s,i]=gt.useState(e.tabs?.[0]??"new");let g;t[1]===Symbol.for("react.memo_cache_sentinel")?(g=[],t[1]=g):g=t[1];const[r,c]=gt.useState(g);let l;t[2]!==e.tabs?(l=e.tabs??["new","instructions","side:side-title","terminal:long-title"],t[2]=e.tabs,t[3]=l):l=t[3];const[h,m]=gt.useState(l);let p;t[4]===Symbol.for("react.memo_cache_sentinel")?(p=F=>c(D=>[...D,F]),t[4]=p):p=t[4];const T=p;let $;t[5]===Symbol.for("react.memo_cache_sentinel")?($=w.jsx(jt,{}),t[5]=$):$=t[5];let x,E,C,A,y,S,k,O,f,L,B;if(t[6]!==r||t[7]!==h||t[8]!==e.width||t[9]!==s||t[10]!==a){let F;t[22]===Symbol.for("react.memo_cache_sentinel")?(F=w.jsx("span",{className:"truncate",children:"A long instructions tab label that should never jump"}),t[22]=F):F=t[22];let D,z,V;t[23]===Symbol.for("react.memo_cache_sentinel")?(D=w.jsx(wt,{workspaceId:W.id,onClose:()=>T("side:side-title")}),z=w.jsx(wt,{workspaceId:W.id}),V=w.jsx(Gt,{workspaceId:W.id}),t[23]=D,t[24]=z,t[25]=V):(D=t[23],z=t[24],V=t[25]);let Y,J;t[26]===Symbol.for("react.memo_cache_sentinel")?(Y=w.jsx(bt,{dynamicTitle:M,terminalIndex:0,onPopOut:Kt,onClose:()=>T("terminal:long-title")}),J=w.jsx(bt,{dynamicTitle:M,terminalIndex:0}),t[26]=Y,t[27]=J):(Y=t[26],J=t[27]);const Rt=[{tab:"new",label:$,tooltip:"Open a tool",closeLabel:"Close New tab"},{tab:"instructions",label:F,tooltip:"Instructions",closeLabel:"Close Instructions"},{tab:"side:side-title",label:D,menuLabel:z,tooltip:V},{tab:"terminal:long-title",label:Y,menuLabel:J,tooltip:M}];let Q;t[28]!==r?(Q=b=>!r.includes(b.tab),t[28]=r,t[29]=Q):Q=t[29];let Z;t[30]!==s?(Z=b=>({...b,id:b.tab,panelId:`panel-${b.tab}`,selected:s===b.tab,onSelect:()=>i(b.tab),onClose:()=>T(b.tab)}),t[30]=s,t[31]=Z):Z=t[31],y=h.map(b=>Rt.find(rt=>rt.tab===b)).filter(Q).map(Z),A=Ct.Provider,S=Mt,C=At,L="bg-surface-primary border-border text-foreground border",t[32]!==e.width?(B={width:e.width,maxWidth:"100%"},t[32]=e.width,t[33]=B):B=t[33],E=Lt,O=a,t[34]===Symbol.for("react.memo_cache_sentinel")?(f=b=>{const{active:rt,over:ut}=b;ut&&m(lt=>qt(lt,lt.findIndex(ct=>`fixture:${ct}`===rt.id),lt.findIndex(ct=>`fixture:${ct}`===ut.id)))},t[34]=f):f=t[34],x=Ht,k=y.map(Xt),t[6]=r,t[7]=h,t[8]=e.width,t[9]=s,t[10]=a,t[11]=x,t[12]=E,t[13]=C,t[14]=A,t[15]=y,t[16]=S,t[17]=k,t[18]=O,t[19]=f,t[20]=L,t[21]=B}else x=t[11],E=t[12],C=t[13],A=t[14],y=t[15],S=t[16],k=t[17],O=t[18],f=t[19],L=t[20],B=t[21];let X;t[35]===Symbol.for("react.memo_cache_sentinel")?(X=()=>{m($t),c(Wt),i("new")},t[35]=X):X=t[35];let q;t[36]!==y||t[37]!==e.reservesToggle?(q=w.jsx(Dt,{items:y,tabsetId:"fixture",onAddNewTab:X,reservesSidebarToggle:e.reservesToggle}),t[36]=y,t[37]=e.reservesToggle,t[38]=q):q=t[38];let H;t[39]!==x||t[40]!==q||t[41]!==k?(H=w.jsx(x,{items:k,strategy:_t,children:q}),t[39]=x,t[40]=q,t[41]=k,t[42]=H):H=t[42];let _;t[43]!==E||t[44]!==H||t[45]!==O||t[46]!==f?(_=w.jsx(E,{sensors:O,onDragEnd:f,children:H}),t[43]=E,t[44]=H,t[45]=O,t[46]=f,t[47]=_):_=t[47];let K;t[48]===Symbol.for("react.memo_cache_sentinel")?(K=w.jsx("div",{className:"text-muted p-3 text-xs",children:"Long titles; hover, focus, and selection keep the close controls in place."}),t[48]=K):K=t[48];let I;t[49]!==_||t[50]!==L||t[51]!==B?(I=w.jsxs("div",{className:L,style:B,children:[_,K]}),t[49]=_,t[50]=L,t[51]=B,t[52]=I):I=t[52];let N;t[53]!==C||t[54]!==I?(N=w.jsx(C,{children:I}),t[53]=C,t[54]=I,t[55]=N):N=t[55];let U;return t[56]!==A||t[57]!==S||t[58]!==N?(U=w.jsx(A,{value:S,children:N}),t[56]=A,t[57]=S,t[58]=N,t[59]=U):U=t[59],U}function Wt(e){return e.filter(Pt)}function Pt(e){return e!=="new"}function $t(e){return e.includes("new")?e:[...e,"new"]}function Xt(e){return`fixture:${e.tab}`}function Kt(){}const Re={title:"App/RightSidebar/Stable tab controls",component:pt,parameters:{layout:"padded",pixel:Ft}};function et(e){const{x:t,y:o,width:a,height:s}=e.getBoundingClientRect();return{x:t,y:o,width:a,height:s}}function j(e){return e.parentElement.parentElement}async function R(){await new Promise(e=>requestAnimationFrame(()=>e()))}async function ft(e){const t=d(e),o=t.getAllByRole("tab");for(const a of o){a.scrollIntoView({inline:"nearest",block:"nearest"}),await u.unhover(a),await R();const s=a.firstElementChild,i=et(a),g=et(s);await u.hover(a),await R(),await n(et(a)).toEqual(i),await n(et(s)).toEqual(g);const r=a.querySelector('button[aria-label^="Close "]');await n(r).not.toBeNull();const c=r.getBoundingClientRect(),l=a.closest('[role="tablist"]').getBoundingClientRect();if(await n(c.top).toBeGreaterThanOrEqual(l.top),await n(c.bottom).toBeLessThanOrEqual(l.bottom),window.matchMedia("(pointer: coarse)").matches&&["new","instructions"].includes(a.id)){const T=window.matchMedia(`(max-width: ${Tt}px)`).matches?xt:Et;await n(c.width).toBeGreaterThanOrEqual(T),await n(c.height).toBeGreaterThanOrEqual(T)}const h=s.querySelector("span.truncate")??s;await n(h.getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().left);const m=a.getBoundingClientRect().width,p=s.getBoundingClientRect().width;await u.click(a),await v(()=>n(a.getAttribute("aria-selected")).toBe("true")),await n(a.getBoundingClientRect().width).toBe(m),await n(s.getBoundingClientRect().width).toBe(p),a.focus(),await u.unhover(a),await R(),await n(getComputedStyle(r).visibility).toBe("visible")}await n(t.getAllByText(M).length).toBeGreaterThanOrEqual(2)}async function Bt(e,t){const o=d(e),a=o.getByRole("tablist"),s=d(a).getAllByRole("tab"),i=o.getByRole("button",{name:"New tab"}),g=o.getByRole("button",{name:"All tabs"}),r=i.getBoundingClientRect(),c=g.getBoundingClientRect(),l=a.getBoundingClientRect();await n(a.scrollWidth>a.clientWidth).toBe(t),await n(r.left-l.right).toBeGreaterThanOrEqual(0),await n(r.left-l.right).toBeLessThanOrEqual(8),await n(c.left-r.right).toBeGreaterThanOrEqual(0),await n(c.right).toBeLessThanOrEqual(j(a).getBoundingClientRect().right);for(const[h,m]of[[i,r],[g,c]]){const p=document.elementFromPoint(m.left+m.width/2,m.top+m.height/2);await n(p!=null&&h.contains(p)).toBe(!0)}t||await n(l.right-s[s.length-1].getBoundingClientRect().right).toBeLessThan(1)}async function Ut(e){return await u.click(d(e).getByRole("button",{name:"All tabs"})),d(document.body).findByRole("dialog",{name:"All tabs"})}async function zt(){await v(()=>n(d(document.body).queryByRole("dialog",{name:"All tabs"})).toBeNull())}async function P(e,t){await v(async()=>{const o=e.getBoundingClientRect(),a=t.getBoundingClientRect();await n(a.left).toBeGreaterThanOrEqual(o.left-.5),await n(a.right).toBeLessThanOrEqual(o.right+.5)})}async function Vt(e){const t=d(e),o=t.getByRole("tablist"),a=d(o).getAllByRole("tab"),[s,i]=a;await u.click(a[a.length-1]),await v(()=>n(i.getBoundingClientRect().right).toBeLessThanOrEqual(o.getBoundingClientRect().left));const g=await Ut(e),r=d(g).getAllByRole("button");await n(r).toHaveLength(a.length);const c=r[r.length-1];await v(()=>n(c).toHaveFocus()),await n(c).toHaveAttribute("aria-current","true"),await u.keyboard("{ArrowUp}"),await n(r[r.length-2]).toHaveFocus(),await u.keyboard("{ArrowDown}{ArrowDown}"),await n(r[r.length-1]).toHaveFocus(),await u.click(r[1]),await zt(),await n(i).toHaveAttribute("aria-selected","true"),await n(i).toHaveFocus(),await P(o,i),await u.click(t.getByRole("button",{name:"New tab"})),await n(s).toHaveAttribute("aria-selected","true"),await P(o,s)}const at={args:{width:330,reservesToggle:!1},play:async({canvasElement:e})=>{await ft(e),await Bt(e,!0),await Vt(e)}},nt={args:{width:300,reservesToggle:!0,tabs:["instructions"]},play:async({canvasElement:e})=>{const t=d(e);await n(t.getAllByRole("tab")).toHaveLength(1),await u.click(t.getByRole("button",{name:"New tab"})),await n(t.getAllByRole("tab")).toHaveLength(2),await n(t.getByRole("tab",{name:/^New tab/})).toHaveAttribute("aria-selected","true")}};function yt(e){return j(d(e).getByRole("tablist")).querySelector('button[aria-hidden="true"]')}const ot={args:{width:1e3,reservesToggle:!0},play:async({canvasElement:e})=>{await ft(e),await Bt(e,!1);const t=d(e),o=t.getByRole("tablist"),a=d(j(o)).getAllByRole("button").filter(c=>!o.contains(c)).map(c=>c.getAttribute("aria-label"));await n(a).toEqual(["New tab","All tabs"]);const s=t.getByRole("button",{name:"New tab"}).getBoundingClientRect(),i=t.getByRole("button",{name:"All tabs"}).getBoundingClientRect(),g=yt(e).getBoundingClientRect(),r=j(o).getBoundingClientRect();await n(i.left-s.right).toBeGreaterThan(8),await n(g.left-i.right).toBeGreaterThanOrEqual(0),await n(g.left-i.right).toBeLessThanOrEqual(8),await n(r.right-g.right).toBeLessThanOrEqual(9)}},st={args:{width:45,reservesToggle:!0},play:async({canvasElement:e})=>{const t=yt(e).getBoundingClientRect(),o=j(d(e).getByRole("tablist")).getBoundingClientRect();await n(t.left).toBeGreaterThanOrEqual(o.left),await n(t.right).toBeLessThanOrEqual(o.right)}},G={args:{width:330,reservesToggle:!1},play:async({canvasElement:e})=>{const t=d(e).getByRole("tablist"),o=d(t).getAllByRole("tab"),[a,s]=o,i=o[o.length-1];await n(a).toHaveAttribute("aria-selected","true"),a.focus(),await u.keyboard("{ArrowRight}"),await n(s).toHaveFocus(),await n(a).toHaveAttribute("aria-selected","true"),await u.keyboard("{End}"),await n(i).toHaveFocus(),await P(t,i),a.style.paddingLeft="32px",await R(),await R(),await P(t,i),i.querySelector('button[aria-label="Close terminal"]').focus(),a.style.paddingLeft="",await R(),await R(),await P(t,i),i.focus(),await u.keyboard("{ArrowRight}"),await n(a).toHaveFocus(),await u.keyboard("{ArrowLeft}"),await n(i).toHaveFocus(),await u.keyboard("{Home}"),await n(a).toHaveFocus(),await u.keyboard("{ArrowRight}{Enter}"),await n(s).toHaveAttribute("aria-selected","true")}};function ht(e){return{x:e.left+e.width/2,y:e.top+e.height/2}}async function mt(e){const t=d(e),o=t.getByRole("tablist").getBoundingClientRect(),a=j(t.getByRole("tablist")).getBoundingClientRect(),s=t.getByTestId("header-stand-in").getBoundingClientRect(),i=["New tab","All tabs"].map(l=>t.getByRole("button",{name:l}).getBoundingClientRect()),g=a.top+a.height/2,r=[];for(let l=Math.ceil(s.left);l<a.right;l+=2)!tt(s,l,g)&&!tt(a,l,g)||[o,...i].some(h=>tt(h,l,g))||dt(l,g)||r.push(l);await n(r,"points that do not drag").toEqual([]);const c=t.getAllByRole("tab").map(l=>ht(l.getBoundingClientRect())).filter(l=>tt(o,l.x,l.y));await n(c.length).toBeGreaterThan(0);for(const l of[...c,...i.map(ht)])await n(dt(l.x,l.y)).toBe(!1)}const it={args:{width:300,reservesToggle:!0},beforeEach:Nt,render:e=>w.jsxs("div",{className:"flex",children:[w.jsx("div",{"data-testid":"header-stand-in",className:"titlebar-drag flex-1"}),w.jsx(pt,{...e})]}),play:async({canvasElement:e})=>{const t=d(e),o=t.getByRole("tablist"),a=d(o).getAllByRole("tab"),s=t.getByTestId("header-stand-in");await u.click(a[a.length-1]),await v(()=>n(a[0].getBoundingClientRect().right).toBeLessThanOrEqual(o.getBoundingClientRect().left));const i=a[0].getBoundingClientRect();await n(i.left).toBeLessThan(s.getBoundingClientRect().right),await n(i.right).toBeGreaterThan(s.getBoundingClientRect().left),await mt(e),await u.click(a[0]),await v(()=>n(a[a.length-1].getBoundingClientRect().right).toBeGreaterThan(o.getBoundingClientRect().right)),await mt(e)}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  // No room for the sidebar toggle, like the phone full-screen strip (the test-runner swipes this
  // one at phone width, see .storybook/test-runner.ts). Wide enough that the longest tab (240px)
  // fits beside "+" and All tabs, so a picked tab can show whole.
  args: {
    width: 330,
    reservesToggle: false
  },
  play: async ({
    canvasElement
  }) => {
    await checkStableControls(canvasElement);
    await checkStripButtons(canvasElement, true);
    await checkTabListMenu(canvasElement);
  }
}`,...at.parameters?.docs?.source}}};nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
  // "+" after the only tab adds the New tab after it.
  args: {
    width: 300,
    reservesToggle: true,
    tabs: ["instructions"]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("tab")).toHaveLength(1);
    await userEvent.click(canvas.getByRole("button", {
      name: "New tab"
    }));
    await expect(canvas.getAllByRole("tab")).toHaveLength(2);
    await expect(canvas.getByRole("tab", {
      name: /^New tab/
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...nt.parameters?.docs?.source}}};ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
  // Wide enough for every tab beside "+", All tabs and the toggle's room.
  args: {
    width: 1000,
    reservesToggle: true
  },
  play: async ({
    canvasElement
  }) => {
    await checkStableControls(canvasElement);
    await checkStripButtons(canvasElement, false);
    // "+" follows the last tab. All tabs and the toggle's room hold the strip's right end, past
    // the free space after "+".
    const canvas = within(canvasElement);
    const tablist = canvas.getByRole("tablist");
    const stripButtons = within(stripOf(tablist)).getAllByRole("button").filter(button => !tablist.contains(button)).map(button => button.getAttribute("aria-label"));
    await expect(stripButtons).toEqual(["New tab", "All tabs"]);
    const plus = canvas.getByRole("button", {
      name: "New tab"
    }).getBoundingClientRect();
    const allTabs = canvas.getByRole("button", {
      name: "All tabs"
    }).getBoundingClientRect();
    const room = toggleRoom(canvasElement).getBoundingClientRect();
    const strip = stripOf(tablist).getBoundingClientRect();
    await expect(allTabs.left - plus.right).toBeGreaterThan(8);
    await expect(room.left - allTabs.right).toBeGreaterThanOrEqual(0);
    await expect(room.left - allTabs.right).toBeLessThanOrEqual(8);
    await expect(strip.right - room.right).toBeLessThanOrEqual(9);
  }
}`,...ot.parameters?.docs?.source}}};st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  // A split pane at its minimum width (15% of a 300 px sidebar) has no room for all controls:
  // the toggle's room stays at the end, under the toggle.
  args: {
    width: 45,
    reservesToggle: true
  },
  play: async ({
    canvasElement
  }) => {
    const room = toggleRoom(canvasElement).getBoundingClientRect();
    const strip = stripOf(within(canvasElement).getByRole("tablist")).getBoundingClientRect();
    await expect(room.left).toBeGreaterThanOrEqual(strip.left);
    await expect(room.right).toBeLessThanOrEqual(strip.right);
  }
}`,...st.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  // Narrow enough that the tabs overflow: a tab reached by a key scrolls into view.
  args: {
    width: 330,
    reservesToggle: false
  },
  play: async ({
    canvasElement
  }) => {
    const row = within(canvasElement).getByRole("tablist");
    const tabs = within(row).getAllByRole("tab");
    const [first, second] = tabs;
    const last = tabs[tabs.length - 1];
    await expect(first).toHaveAttribute("aria-selected", "true");
    first.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(second).toHaveFocus();
    // Focus moves; the selection stays until Enter or Space.
    await expect(first).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{End}");
    await expect(last).toHaveFocus();
    await expectFullyInRow(row, last);
    // A size change in the row (a badge loads, a font swaps) must not scroll it back to the
    // selected tab, away from the focused one. The row's ResizeObserver runs within a frame.
    first.style.paddingLeft = "32px";
    await frame();
    await frame();
    await expectFullyInRow(row, last);
    // The same while focus is on a button inside that tab (the terminal's close button).
    last.querySelector<HTMLButtonElement>('button[aria-label="Close terminal"]')!.focus();
    first.style.paddingLeft = "";
    await frame();
    await frame();
    await expectFullyInRow(row, last);
    last.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(first).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(last).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(first).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}{Enter}");
    await expect(second).toHaveAttribute("aria-selected", "true");
  }
}`,...G.parameters?.docs?.source},description:{story:`Arrow keys, Home and End move focus between the tabs (WAI-ARIA tabs pattern, #7102). Only Enter
or Space selects, and only the selected tab is in the Tab order.`,...G.parameters?.docs?.description}}};it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
  // In Electron the strip sits after the workspace header in DOM order, and Electron lets the
  // later region rect win, so a tab scrolled out of the row must not block dragging the header.
  args: {
    width: 300,
    reservesToggle: true
  },
  beforeEach: withDesktopTitlebar,
  render: args => <div className="flex">
      <div data-testid="header-stand-in" className="titlebar-drag flex-1" />
      <StripFixture {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole("tablist");
    const tabs = within(row).getAllByRole("tab");
    const standIn = canvas.getByTestId("header-stand-in");
    await userEvent.click(tabs[tabs.length - 1]);
    await waitFor(() => expect(tabs[0].getBoundingClientRect().right).toBeLessThanOrEqual(row.getBoundingClientRect().left));
    const scrolledOut = tabs[0].getBoundingClientRect();
    await expect(scrolledOut.left).toBeLessThan(standIn.getBoundingClientRect().right);
    await expect(scrolledOut.right).toBeGreaterThan(standIn.getBoundingClientRect().left);
    await checkStripDragRegions(canvasElement);
    await userEvent.click(tabs[0]);
    await waitFor(() => expect(tabs[tabs.length - 1].getBoundingClientRect().right).toBeGreaterThan(row.getBoundingClientRect().right));
    await checkStripDragRegions(canvasElement);
  }
}`,...it.parameters?.docs?.source}}};const ve=["Narrow","SingleTab","Wide","Cramped","ArrowKeys","DesktopDragRegions"];export{G as ArrowKeys,st as Cramped,it as DesktopDragRegions,at as Narrow,nt as SingleTab,ot as Wide,ve as __namedExportsOrder,Re as default};
