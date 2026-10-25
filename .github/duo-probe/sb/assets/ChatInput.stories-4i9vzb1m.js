import{j as u,w as le,c as T,i as re,B as Y,bJ as ce,bK as de,S as v,E as ne}from"./iframe-DS5VyXLs.js";import{a as h,P as R,A as w}from"./meta-BWzge-eA.js";import{s as g}from"./chatSetup-DJI_9Mbv.js";import{a as M,c as B}from"./messages-CnWrfKdU.js";import{e as pe}from"./tools-Bd0lcXw4.js";import{a as y,b as f}from"./storyPlayHelpers-_VqAI56j.js";import{a as ue}from"./orpc-DZZSHgoi.js";import{c as he}from"./contrast-Bnc7IxMq.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./git-Ekgdg9se.js";import"./autoModelRouting-Bi5zLFGe.js";const{expect:S,within:c,userEvent:k,waitFor:l}=__STORYBOOK_MODULE_TEST__,te=768,Ve={...h,title:"App/Chat/Input"},W={render:()=>u.jsx(w,{setup:()=>g({messages:[],providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}})}),parameters:{docs:{description:{story:"Shows the voice input button in disabled state when OpenAI API key is not configured. Hover over the mic icon in the chat input to see the user education tooltip."}}}};let oe;const P={render:()=>u.jsx(w,{setup:()=>{let o={apiKeySet:!1,apiKeySource:"env",isEnabled:!0,isConfigured:!0};const e=g({workspaceId:"ws-voice-env-key",messages:[]}),r=ue();return e.providers.getConfig=()=>Promise.resolve({openai:o}),e.providers.onConfigChanged=()=>Promise.resolve(le(r.iterate(),{})),oe=()=>{o={apiKeySet:!1,codexOauthSet:!0,isEnabled:!0,isConfigured:!0},r.push()},e}}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o,t=await c(e).findByRole("button",{name:/^Voice input/});if(await l(()=>S(t).toHaveAccessibleName("Voice input")),await S(t).toBeEnabled(),!oe)throw new Error("mock client was not set up");oe(),await l(()=>S(t).toHaveAccessibleName("Voice input (not configured)")),await S(t).toBeDisabled()}},N={tags:["tooltip-visual"],globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx(w,{setup:()=>g({workspaceId:"ws-composer-tooltip",messages:[]})}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone","laptop"]}},docs:{description:{story:"Hovers the chat input attachment control so the shared tooltip surface is captured in its most space-constrained production context."}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f();const r=c(e).getByLabelText("Attach file");await k.hover(r),await l(()=>{const t=document.querySelector("[data-radix-popper-content-wrapper] [data-side]");if(!t?.textContent?.includes("Attach any file"))throw new Error("Chat input attachment tooltip not visible");if(t.scrollWidth>t.clientWidth||t.scrollHeight>t.clientHeight)throw new Error(`Tooltip overflows (${t.scrollWidth}×${t.scrollHeight}px > ${t.clientWidth}×${t.clientHeight}px)`);const n=t.getBoundingClientRect(),s=8;if(n.left<s||n.right>window.innerWidth-s||n.top<s||n.bottom>window.innerHeight-s)throw new Error("Tooltip is outside the viewport-safe area")},{interval:50,timeout:5e3})}},H={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-transcript-held",transcriptOnly:!0,messages:[M("msg-1","Migrate the storage layer to the new schema.",{historySequence:1,timestamp:v-12e4}),B("msg-2","Started the migration; stopped before archiving.",{historySequence:2,timestamp:v-6e4})],onChat:(o,e)=>{e({type:"held-inputs-changed",workspaceId:o,heldInputs:[{id:"held-archived",reason:"interrupted",displayText:"Run the migration once the lint pass is green.",attachmentCount:1,reviewCount:0}]})}}))}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o,r=c(e);if(await l(()=>r.getByRole("button",{name:"Discard unsent message"})),r.queryByRole("button",{name:"Send unsent message"})!=null)throw new Error("A transcript-only held input must not offer Send");r.getByRole("note")}},_={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-queued-follow-up",messages:[M("msg-1","Please audit the settings flow for regressions.",{historySequence:1,timestamp:v-12e4}),B("msg-2","I’m reviewing the relevant components and tests now.",{historySequence:2,timestamp:v-6e4})],onChat:(o,e)=>{setTimeout(()=>{e({type:"stream-start",workspaceId:o,messageId:"msg-3",model:"mock-model",historySequence:3,startTime:v}),e({type:"stream-delta",workspaceId:o,messageId:"msg-3",delta:"Checking the form state and keyboard paths…",tokens:8,timestamp:v}),e({type:"queued-message-changed",workspaceId:o,hasQueuedMessages:!0,queuedMessages:["Also verify the narrow layout and make sure the action buttons stay easy to scan."],displayText:"Also verify the narrow layout and make sure the action buttons stay easy to scan.",queueDispatchMode:"tool-end"}),e({type:"held-inputs-changed",workspaceId:o,heldInputs:[{id:"held-reported",reason:"reported",displayText:"Summarize what changed in the settings validation.",attachmentCount:1,reviewCount:1},{id:"held-indeterminate",reason:"indeterminate",displayText:"",attachmentCount:2,reviewCount:0},{id:"held-interrupted",reason:"interrupted",displayText:"Run the migration once the lint pass is green.",attachmentCount:0,reviewCount:0}]})},75)}}))}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone","laptop"]}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f(),await l(()=>{const t=e.querySelector('[data-component="QueuedMessageGroup"]'),n=t?.closest('[data-component="ChatDockSurface"]'),s=e.querySelector('[data-component="QueuedMessageCard"]'),d=e.querySelector('[data-component="QueuedMessageActions"]'),i=e.querySelector('[data-component="QueuedMessageStatus"]');if(!n||!t||!s||!d||!i)throw new Error("Queued follow-up user-message layout not rendered");for(const b of[t,s,d,i])if(b.scrollWidth>b.clientWidth)throw new Error(`Queued follow-up element overflows horizontally (${b.scrollWidth}px > ${b.clientWidth}px)`);const a=n.getBoundingClientRect(),p=t.getBoundingClientRect(),I=s.getBoundingClientRect(),x=d.getBoundingClientRect(),C=i.getBoundingClientRect();if(Math.abs(a.right-p.right)>1)throw new Error("Queued follow-up group is not right-aligned with the transcript column");if(Math.abs(p.right-I.right)>1)throw new Error("Queued follow-up bubble is not right-aligned within its group");if(Math.abs(p.right-x.right)>1)throw new Error("Queued follow-up actions are not right-aligned within their metadata row");if(C.right>p.right+1)throw new Error("Queued follow-up status overflows its right-aligned metadata row")}),await l(()=>{const t=[...e.querySelectorAll('[data-component="HeldInputBanner"]')];if(t.length!==3)throw new Error("Held input banners not rendered");for(const a of t)if(a.scrollWidth>a.clientWidth)throw new Error("Held input banner overflows horizontally");if(t.flatMap(a=>[...a.querySelectorAll("kbd")]).some(a=>!a.className.includes(`[@media(max-width:${re}px)]:hidden`)))throw new Error("Held input shortcut hints must be hidden below the narrow breakpoint");const s=window.matchMedia(`(max-width: ${re}px)`).matches,d=t.map(a=>[...a.querySelectorAll("kbd")].filter(p=>getComputedStyle(p).display!=="none").length),i=s?[0,0,0]:[2,0,0];if(d.join()!==i.join())throw new Error(`Held input shortcut hints visible ${d.join()} (expected ${i.join()}, narrow=${s})`);if(!t[0].textContent?.includes("the task reported")||t[1].textContent?.includes("reported")||t[2].textContent?.includes("reported"))throw new Error("Held input banner wording does not match its refusal reason")});const r=e.querySelector('[data-component="QueuedMessageStatus"]');if(!r)throw new Error("Queued dispatch dropdown not rendered");await k.click(r),await l(()=>{const t=e.querySelector('[data-component="QueuedMessageDispatchMenu"]');if(!t)throw new Error("Queued dispatch menu did not open");if(t.querySelectorAll('[role="menuitem"]').length!==3)throw new Error("Queued dispatch menu must show exactly three actions");if(t.scrollWidth>t.clientWidth)throw new Error("Queued dispatch menu overflows horizontally");for(const n of t.querySelectorAll('[role="menuitem"]'))if(n.scrollHeight>n.clientHeight)throw new Error("Queued dispatch menu item wraps vertically")})}},se=o=>({globals:{theme:o},parameters:{...h.parameters,pixel:R},render:_.render,play:async({canvasElement:e})=>{const r=document.getElementById("storybook-root")??e,n=(await l(()=>{const s=[...r.querySelectorAll('[data-component="QueuedMessageStatus"]')],d=[...r.querySelectorAll('[data-component="HeldInputBanner"]')].flatMap(a=>c(a).queryAllByRole("button",{name:/^Send/})),i=[...s,...d];if(i.length<4)throw new Error(`expected 4+ action buttons, found ${i.length}`);return i})).flatMap(s=>he(s)).filter(s=>!s.element.closest("kbd")).filter(s=>s.ratio<4.5).map(s=>`${s.ratio.toFixed(2)}:1 "${s.text}"`);await S(n.join(`
`)).toBe("")}}),U=se("light"),Q=se("dark"),K={render:()=>u.jsx(w,{setup:()=>g({workspaceId:"ws-focus-border",messages:[]})}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o,r=c(e);await y(e);const t=await r.findByLabelText("Message"),n=e.querySelector('[data-component="ChatInputSurface"]');if(!n)throw new Error("Composer surface not rendered");f();const s=getComputedStyle(n).borderColor;t.focus(),await l(()=>{if(getComputedStyle(n).borderColor===s)throw new Error(`Focusing the composer left its border at ${s}`)})}},G={tags:["thinking-selector"],globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-thinking-selector",aiSettings:{model:"openai:gpt-6.1-sol",thinkingLevel:"off",reasoningMode:"pro"},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,serviceTier:"priority",cyberModelEnabled:!0}},messages:[]}))}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone","laptop"]}},docs:{description:{story:"Opens the chat-input thinking selector with Pro and fast mode active and the Cyber row offered, including the phone-width layout."}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f(),await k.click(c(e).getByRole("button",{name:/Thinking:/i})),await l(()=>{const r=e.querySelector('[data-component="ThinkingSelectorMenu"]');if(!r)throw new Error("Thinking selector menu did not open");if(!c(r).getByRole("button",{name:/Pro mode/i}))throw new Error("Pro mode row missing");if(!c(r).getByRole("button",{name:/^Fast mode/i}))throw new Error("Fast mode row missing");if(!c(r).getByRole("button",{name:/Cyber/}))throw new Error("Cyber row missing")})}},j={tags:["thinking-selector"],render:()=>u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-thinking-selector-cyber",aiSettings:{model:"openai:gpt-6.1-sol",thinkingLevel:"off",reasoningMode:"cyber"},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,cyberModelEnabled:!0}},messages:[]}))}),parameters:{...h.parameters,pixel:R,docs:{description:{story:"Opens the chat-input thinking selector with the OpenAI cyber model setting on and Cyber mode active."}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f();const r=c(e).getByRole("button",{name:/Thinking:/i});await S(r).toHaveAccessibleName(/cyber mode/),await k.click(r);const t=await l(()=>{const n=e.querySelector('[data-component="ThinkingSelectorMenu"]');if(!n)throw new Error("Thinking selector menu did not open");return n});await S(c(t).getByRole("button",{name:/Cyber/})).toHaveAttribute("aria-pressed","true"),await S(c(t).getByRole("button",{name:/Pro mode/i})).toHaveAttribute("aria-pressed","false")}},O={tags:["thinking-selector"],globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx("div",{"data-testid":"composer-width-wrapper",style:{width:"min(380px, 100%)",height:700},children:u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-thinking-selector-ultrafast",aiSettings:{model:"openai:gpt-6.1-sol",thinkingLevel:"off"},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,serviceTier:"ultrafast",fastModePreviousServiceTier:"unset"}},messages:[]}))})}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark"],viewports:["phone"]}},docs:{description:{story:"Ultrafast mode active on GPT-6.1 Sol: the closed selector shows the bolt-with-trails indicator and the open menu marks Ultrafast, not Fast."}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f();const r=c(e).getByRole("button",{name:/Thinking:/i});await S(r).toHaveAccessibleName(/ultrafast mode/);const t=e.querySelector("[data-ultrafast-mode-indicator]");if(!t||t.getBoundingClientRect().width===0)throw new Error("Ultrafast indicator should be visible on the tightest composer row");if(e.querySelector("[data-fast-mode-indicator]"))throw new Error("Fast indicator must not render while Ultrafast is the active tier");Z(e);const n=e.querySelector('[data-component="ComposerControlRow"]');if(!n)throw new Error("Composer control row not rendered");if(n.scrollWidth>n.clientWidth)throw new Error(`Row overflows by ${n.scrollWidth-n.clientWidth}px with Ultrafast`);await k.click(r);const s=await l(()=>{const d=e.querySelector('[data-component="ThinkingSelectorMenu"]');if(!d)throw new Error("Thinking selector menu did not open");return d});await S(c(s).getByRole("button",{name:/^Ultrafast mode/i})).toHaveAttribute("aria-pressed","true"),await S(c(s).getByRole("button",{name:/^Fast mode/i})).toHaveAttribute("aria-pressed","false")}},A={render:()=>u.jsx("div",{"data-testid":"composer-width-wrapper",style:{width:"min(900px, 100%)",height:700},children:u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-composer-breakpoints",aiSettings:{model:"openai:gpt-6.1-sol",thinkingLevel:"off",reasoningMode:"pro"},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,serviceTier:"priority"}},messages:[M("msg-1","Summarize the composer layout rules",{historySequence:1}),B("msg-2","The control row collapses in two stages.",{historySequence:2,contextUsage:{inputTokens:12e4,outputTokens:8e3}})]}))})}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f();const r=c(e).getByTestId("composer-width-wrapper"),t=c(e).getByLabelText("Select agent"),n=e.querySelector('[aria-label^="Context usage"]');if(!n)throw new Error("Context usage control not rendered");const s=()=>{const m=e.querySelector('[data-component="ComposerControlRow"]');if(!m)throw new Error("Composer control row not rendered");return m.getBoundingClientRect().width},d=()=>(e.querySelector("[data-context-usage-meter]")?.getBoundingClientRect().width??0)>0,i=e.querySelector("[data-thinking-pro-status]");if(!i)throw new Error("Active PRO status not rendered");const a=()=>i.getBoundingClientRect().width>0,p=e.querySelector("[data-fast-mode-indicator]");if(!p)throw new Error("Active fast-mode indicator not rendered");const I=()=>p.getBoundingClientRect().width>0;async function x(m,E,q){r.style.width=`${m}px`,await l(()=>{const ee=s();if(ee<=E||ee>=q)throw new Error(`Wrapper ${m}px put the control row at ${Math.round(ee)}px, outside the ${E}-${q}px band this assertion needs`)})}const C=m=>{Z(e);const E=e.querySelector('[data-component="ComposerControlRow"]');if(!E)throw new Error("Composer control row not rendered");if(E.scrollWidth>E.clientWidth)throw new Error(`Row overflows by ${E.scrollWidth-E.clientWidth}px at the ${m} stage`)},b=e.querySelector('[data-model-label="full"]'),L=e.querySelector('[data-model-label="compact"]');if(!b||!L)throw new Error("Responsive model labels not rendered");const D=()=>{if(b.getBoundingClientRect().width>0)throw new Error("Full GPT family label should hide on a constrained composer row");if(L.getBoundingClientRect().width===0)throw new Error("Compact model tier should be visible on a constrained composer row");if(L.innerText.trim()!=="Sol")throw new Error(`Expected constrained GPT tier label "Sol", got "${L.innerText}"`)};await x(380,300,341),await l(()=>{if(t.innerText.trim()!=="")throw new Error(`Agent pill should be icon-only, showing "${t.innerText}"`);if(!/^\d+%$/.test(n.innerText.trim()))throw new Error(`Context pill should be percentage-only, showing "${n.innerText}"`);if(d())throw new Error("Context meter should be hidden on an icon-only row");if(a())throw new Error("PRO status should be hidden on the tightest row");if(!I())throw new Error("Fast-mode lightning should stay visible on narrow rows");D(),C("tightest")}),await x(405,344,359),await l(()=>{if(t.innerText.trim()!=="")throw new Error(`Agent pill should still be icon-only at or below 360px, showing "${t.innerText}"`);if(!a())throw new Error("PRO status should return once the row clears 340px");D(),C("pro-returns")}),await x(454,365,445),await l(()=>{if(t.innerText.trim()!=="")throw new Error(`Agent pill should stay icon-only while the context pill shares the row, showing "${t.innerText}"`);C("phone-width"),D();const m=e.querySelector('[data-component="ModelSelectorGroup"] button span');if(!m)throw new Error("Model name not rendered");if(m.scrollWidth>m.clientWidth)throw new Error(`Model name is clipped to "${m.innerText}" at a phone-width row that has room for it`)}),await x(524,455,495),await l(()=>{if(t.innerText.trim()==="")throw new Error("Agent pill should show its label once the row clears 450px");if(!/^\d+%$/.test(n.innerText.trim()))throw new Error(`Context pill should stay percentage-only at or below 500px, showing "${n.innerText}"`);if(d())throw new Error("Context meter should stay hidden at or below 500px");if(!a())throw new Error("PRO status should stay visible above 340px");D(),C("agent-label-returns")}),await x(620,505,1200),await l(()=>{if(!/^\d+%$/.test(n.innerText.trim()))throw new Error(`Context control should keep its concise percentage label, showing "${n.innerText}"`);if(!d())throw new Error("Context meter should be visible above 500px");if(C("full-detail"),b.getBoundingClientRect().width===0)throw new Error("Full model label should return once the composer row clears 500px");if(L.getBoundingClientRect().width>0)throw new Error("Compact model label should hide once the full label has room");const m=e.querySelector('[data-component="ModelSelectorGroup"] button');if(!m)throw new Error("Model trigger not rendered");const E=m.getBoundingClientRect().width,q=8*parseFloat(getComputedStyle(document.documentElement).fontSize);if(E>=q-8)throw new Error(`Model trigger reserves ${Math.round(E)}px of its ${Math.round(q)}px cap for a short name instead of sizing to content`)})}};function Z(o,e=window.matchMedia("(max-width: 768px) and (pointer: coarse)").matches){const r=o.querySelector('[data-component="ComposerControlRow"]'),t=o.querySelector('[data-component="ModelSelectorGroup"]');if(!r||!t)throw new Error("Composer controls not rendered");const n=t.getBoundingClientRect(),s=r.getBoundingClientRect(),d=[c(r).getByLabelText("Select agent"),c(r).getByRole("button",{name:/^Context usage/}),t];for(const i of d){const a=i.getBoundingClientRect();if(a.width!==0){for(const p of["height","top","bottom"])if(Math.abs(a[p]-n[p])>.5)throw new Error(`Composer pill ${p} is ${a[p]}px; model/thinking pill is ${n[p]}px`);if(a.left<s.left-.5||a.right>s.right+.5)throw new Error("Composer pill extends outside its row")}}for(const i of r.querySelectorAll("button")){const a=i.getBoundingClientRect();if(a.width!==0){if(e&&(a.height<Y||a.width<Y))throw new Error("Composer button lost its minimum touch target");if(t.contains(i)&&(a.top<n.top-.5||a.bottom>n.bottom+.5))throw new Error("Model/thinking button extends outside its pill")}}}const V={render:A.render,globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{...h.parameters,pixel:{matrix:{viewports:["phone","laptop"]}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f(),await l(()=>Z(e));const r=c(e).getByTestId("composer-width-wrapper"),t=r.style.width,n=document.createElement("style");n.textContent=`[data-component="ComposerControlRow"] button { min-height: ${Y}px; min-width: ${Y}px; }`,document.head.append(n),r.style.width="390px";try{await l(()=>Z(e,!0))}finally{n.remove(),r.style.width=t}}},$={render:()=>u.jsx(w,{setup:()=>{const o="ws-editing";return ce(o,""),g({workspaceId:o,messages:[M("msg-1","Add authentication to the user API endpoint",{historySequence:1,timestamp:v-3e5}),B("msg-2","I'll help you add authentication. Let me check the current implementation and add JWT validation.",{historySequence:2,timestamp:v-29e4,toolCalls:[pe("call-1","src/api/users.ts",`export function getUser(req, res) {
  const user = db.users.find(req.params.id);
  res.json(user);
}`)]}),M("msg-3","Actually, can you use a different approach?",{historySequence:3,timestamp:v-28e4}),B("msg-4","Of course! I can use a different authentication approach. What would you prefer?",{historySequence:4,timestamp:v-27e4})]})}}),play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o,r=c(e),t=await r.findAllByLabelText("Edit",{},{timeout:1e4});if(t.length===0)throw new Error("No edit buttons found");await k.click(t[0]),await l(()=>{if(r.getByLabelText("Edit message"),!e.querySelector('[data-component="ChatInputSurface"]')?.classList.contains("border-editing-mode"))throw new Error("Composer surface not in editing state")}),await r.findByText("Messages below will be removed when you submit")},parameters:{docs:{description:{story:"Shows the editing message state with the amber-styled input border and edit cutoff barrier indicating messages that will be removed."}}}},me=[M("msg-1","Widen the transcript and check the composer edges",{historySequence:1}),B("msg-2","The composer should span the same column.",{historySequence:2,contextUsage:{inputTokens:64e4,outputTokens:4e3}})],we={id:"bash_1",pid:4242,script:"npm run dev",displayName:"Dev Server",startTime:v,status:"running"};function ae(o){return T(),g({workspaceId:o?"ws-dock-align-full":"ws-dock-align-centered",messages:me,backgroundProcesses:[we],chatTranscriptFullWidth:o})}async function ie(o,e){const r=o.querySelector('[aria-label="Conversation transcript"]');if(!r)throw new Error("Transcript column not rendered");const t=r.parentElement;if(!t)throw new Error("Transcript scrollport not rendered");const n=[],s=(i,a)=>{const p=o.querySelector(a);if(!p)throw new Error(`Docked ${i} not rendered`);n.push([i,p])};s("composer",'[data-component="ChatInputSurface"]'),await l(()=>s("decoration",'[data-component="ChatInputDecorationStack"] button'));const d=o.querySelectorAll('[data-component="ChatDockSurface"]');if(d.length===0)throw new Error("No ChatDockSurface-wrapped entry rendered");d.forEach((i,a)=>n.push([`wrapped surface ${a}`,i])),await l(()=>{const i=r.getBoundingClientRect(),a=t.clientWidth;if(e==="full-width"){if(i.width<=te)throw new Error(`Transcript is ${Math.round(i.width)}px wide, so this story is not in full-width mode`)}else{if(a<=te)throw new Error(`Scrollport is only ${a}px wide, so the centered cap is not what limits the column`);if(Math.round(i.width)!==te)throw new Error(`Centered transcript should stop at the cap, measured ${Math.round(i.width)}px`)}for(const[p,I]of n){const x=I.getBoundingClientRect(),C=Math.round(x.left-i.left),b=Math.round(i.right-x.right);if(C!==0||b!==0)throw new Error(`Docked ${p} is inset from the transcript column by ${C}px left and ${b}px right`)}})}const z={render:()=>u.jsx(w,{setup:()=>ae(!0)}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f(),await ie(e,"full-width")}},X={render:()=>u.jsx(w,{setup:()=>ae(!1)}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f(),await ie(e,"capped")}},J={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>u.jsx(w,{setup:()=>(T(),de("ws-auto-routing","exec","model",!0),g({workspaceId:"ws-auto-routing",aiSettings:{model:"openai:gpt-5.6-sol",thinkingLevel:"off"},experiments:{[ne.AUTO_MODEL_ROUTING]:!0},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}},messages:[]}))}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark"],viewports:["phone","laptop"]}},docs:{description:{story:"Composer with the auto-model-routing experiment on and Auto selected: the model trigger reads Auto and the picker pins the Auto row above the concrete models."}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f();const r=c(e).getByRole("combobox");await l(()=>{if(!r.textContent?.includes("Auto"))throw new Error("Trigger does not read Auto")}),await k.click(r),await l(()=>{if(e.querySelector("[data-auto-routing-option]")?.getAttribute("aria-selected")!=="true")throw new Error("Auto row is not the selected option")})}},F={render:()=>u.jsx(w,{setup:()=>(T(),g({workspaceId:"ws-auto-routing-keyboard",aiSettings:{model:"openai:gpt-5.6-sol",thinkingLevel:"off"},experiments:{[ne.AUTO_MODEL_ROUTING]:!0},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}},messages:[]}))}),parameters:{...h.parameters,docs:{description:{story:"Opens the model picker with Auto off, moves the highlight above the first model with ArrowUp, and selects Auto with Enter."}}},play:async({canvasElement:o})=>{const e=document.getElementById("storybook-root")??o;await y(e),f();const r=c(e).getByRole("combobox");if(r.textContent?.includes("Auto"))throw new Error("Auto should start inactive");await k.click(r),await c(e).findByPlaceholderText(/Search \[provider:model-name\]/i),await k.keyboard("{ArrowUp}"),await l(()=>{if(e.querySelector("[data-auto-routing-option]")?.getAttribute("data-highlighted")!=="true")throw new Error("ArrowUp did not highlight the Auto row")}),await k.keyboard("{Enter}"),await l(()=>{if(!c(e).getByRole("combobox").textContent?.includes("Auto"))throw new Error("Enter did not select Auto")})}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    messages: [],
    // No OpenAI key configured - voice button should be disabled with tooltip
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true
      }
      // openai deliberately missing
    }
  })} />,
  parameters: {
    docs: {
      description: {
        story: "Shows the voice input button in disabled state when OpenAI API key is not configured. Hover over the mic icon in the chat input to see the user education tooltip."
      }
    }
  }
}`,...W.parameters?.docs?.source},description:{story:"Voice input button shows user education when OpenAI API key is not set",...W.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    let openai: ProviderConfigInfo = {
      apiKeySet: false,
      apiKeySource: "env",
      isEnabled: true,
      isConfigured: true
    };
    const client = setupSimpleChatStory({
      workspaceId: "ws-voice-env-key",
      messages: []
    });
    const changes = createAsyncMessageQueue<void>();
    client.providers.getConfig = () => Promise.resolve({
      openai
    });
    client.providers.onConfigChanged = () => Promise.resolve(wrapAsyncIterator(changes.iterate(), {}));
    leaveOnlyCodexOauth = () => {
      // What providerService.getConfig reports for OpenAI with only Codex OAuth tokens.
      openai = {
        apiKeySet: false,
        codexOauthSet: true,
        isEnabled: true,
        isConfigured: true
      };
      changes.push();
    };
    return client;
  }} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const canvas = within(storyRoot);
    const mic = await canvas.findByRole("button", {
      name: /^Voice input/
    });
    await waitFor(() => expect(mic).toHaveAccessibleName("Voice input"));
    await expect(mic).toBeEnabled();
    if (!leaveOnlyCodexOauth) throw new Error("mock client was not set up");
    leaveOnlyCodexOauth();
    await waitFor(() => expect(mic).toHaveAccessibleName("Voice input (not configured)"));
    await expect(mic).toBeDisabled();
  }
}`,...P.parameters?.docs?.source},description:{story:`Transcription resolves OpenAI keys from env vars and key files too, so those enable the mic.
Codex OAuth alone cannot transcribe, so once only OAuth is left the mic is disabled again even
though the provider still reports isConfigured.`,...P.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ["tooltip-visual"],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-composer-tooltip",
    messages: []
  })} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      // Keep the shared tooltip honest in the dense composer and near the phone viewport edge.
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone", "laptop"]
      }
    },
    docs: {
      description: {
        story: "Hovers the chat input attachment control so the shared tooltip surface is captured in its most space-constrained production context."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    const attachButton = within(storyRoot).getByLabelText("Attach file");
    await userEvent.hover(attachButton);
    await waitFor(() => {
      const tooltip = document.querySelector<HTMLElement>("[data-radix-popper-content-wrapper] [data-side]");
      if (!tooltip?.textContent?.includes("Attach any file")) {
        throw new Error("Chat input attachment tooltip not visible");
      }
      if (tooltip.scrollWidth > tooltip.clientWidth || tooltip.scrollHeight > tooltip.clientHeight) {
        throw new Error(\`Tooltip overflows (\${tooltip.scrollWidth}×\${tooltip.scrollHeight}px > \${tooltip.clientWidth}×\${tooltip.clientHeight}px)\`);
      }
      const bounds = tooltip.getBoundingClientRect();
      const viewportPadding = 8;
      if (bounds.left < viewportPadding || bounds.right > window.innerWidth - viewportPadding || bounds.top < viewportPadding || bounds.bottom > window.innerHeight - viewportPadding) {
        throw new Error("Tooltip is outside the viewport-safe area");
      }
    }, {
      interval: 50,
      timeout: 5000
    });
  }
}`,...N.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  // Mirrors the phone Pixel variant for local viewing.
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId: "ws-transcript-held",
      transcriptOnly: true,
      messages: [createUserMessage("msg-1", "Migrate the storage layer to the new schema.", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 120_000
      }), createAssistantMessage("msg-2", "Started the migration; stopped before archiving.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 60_000
      })],
      onChat: (workspaceId, emit) => {
        emit({
          type: "held-inputs-changed",
          workspaceId,
          heldInputs: [{
            id: "held-archived",
            reason: "interrupted",
            displayText: "Run the migration once the lint pass is green.",
            attachmentCount: 1,
            reviewCount: 0
          }]
        });
      }
    });
  }} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const canvas = within(storyRoot);
    await waitFor(() => canvas.getByRole("button", {
      name: "Discard unsent message"
    }));
    if (canvas.queryByRole("button", {
      name: "Send unsent message"
    }) != null) {
      throw new Error("A transcript-only held input must not offer Send");
    }
    canvas.getByRole("note");
  }
}`,...H.parameters?.docs?.source},description:{story:`#4770: a transcript-only workspace has no composer, so its held inputs render above the
read-only notice with Discard only (the workspace cannot run a turn).`,...H.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId: "ws-queued-follow-up",
      messages: [createUserMessage("msg-1", "Please audit the settings flow for regressions.", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 120_000
      }), createAssistantMessage("msg-2", "I’m reviewing the relevant components and tests now.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 60_000
      })],
      onChat: (workspaceId, emit) => {
        // Replay the active turn after history catches up so the queued card is exercised in the
        // same docked state users see while an agent is working.
        setTimeout(() => {
          emit({
            type: "stream-start",
            workspaceId,
            messageId: "msg-3",
            model: "mock-model",
            historySequence: 3,
            startTime: STABLE_TIMESTAMP
          });
          emit({
            type: "stream-delta",
            workspaceId,
            messageId: "msg-3",
            delta: "Checking the form state and keyboard paths…",
            tokens: 8,
            timestamp: STABLE_TIMESTAMP
          });
          emit({
            type: "queued-message-changed",
            workspaceId,
            hasQueuedMessages: true,
            queuedMessages: ["Also verify the narrow layout and make sure the action buttons stay easy to scan."],
            displayText: "Also verify the narrow layout and make sure the action buttons stay easy to scan.",
            queueDispatchMode: "tool-end"
          });
          // Refused (held) inputs share the queued message's dock; covering them here keeps
          // the phone and laptop Pixel variants of that dock in one story (snapshot budget).
          emit({
            type: "held-inputs-changed",
            workspaceId,
            heldInputs: [{
              id: "held-reported",
              reason: "reported",
              displayText: "Summarize what changed in the settings validation.",
              attachmentCount: 1,
              reviewCount: 1
            }, {
              id: "held-indeterminate",
              reason: "indeterminate",
              displayText: "",
              attachmentCount: 2,
              reviewCount: 0
            }, {
              // Returned by Stop while the composer could not take it (#4448).
              id: "held-interrupted",
              reason: "interrupted",
              displayText: "Run the migration once the lint pass is green.",
              attachmentCount: 0,
              reviewCount: 0
            }]
          });
        }, 75);
      }
    });
  }} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      // The phone variant (below the narrow breakpoint) pins the held banners' hidden shortcut
      // hints; laptop pins them visible on the oldest banner.
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone", "laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    await waitFor(() => {
      const group = storyRoot.querySelector<HTMLElement>('[data-component="QueuedMessageGroup"]');
      const dock = group?.closest<HTMLElement>('[data-component="ChatDockSurface"]');
      const card = storyRoot.querySelector<HTMLElement>('[data-component="QueuedMessageCard"]');
      const actions = storyRoot.querySelector<HTMLElement>('[data-component="QueuedMessageActions"]');
      const status = storyRoot.querySelector<HTMLElement>('[data-component="QueuedMessageStatus"]');
      if (!dock || !group || !card || !actions || !status) {
        throw new Error("Queued follow-up user-message layout not rendered");
      }
      for (const element of [group, card, actions, status]) {
        if (element.scrollWidth > element.clientWidth) {
          throw new Error(\`Queued follow-up element overflows horizontally (\${element.scrollWidth}px > \${element.clientWidth}px)\`);
        }
      }
      const dockBounds = dock.getBoundingClientRect();
      const groupBounds = group.getBoundingClientRect();
      const cardBounds = card.getBoundingClientRect();
      const actionsBounds = actions.getBoundingClientRect();
      const statusBounds = status.getBoundingClientRect();
      if (Math.abs(dockBounds.right - groupBounds.right) > 1) {
        throw new Error("Queued follow-up group is not right-aligned with the transcript column");
      }
      if (Math.abs(groupBounds.right - cardBounds.right) > 1) {
        throw new Error("Queued follow-up bubble is not right-aligned within its group");
      }
      if (Math.abs(groupBounds.right - actionsBounds.right) > 1) {
        throw new Error("Queued follow-up actions are not right-aligned within their metadata row");
      }
      if (statusBounds.right > groupBounds.right + 1) {
        throw new Error("Queued follow-up status overflows its right-aligned metadata row");
      }
    });
    await waitFor(() => {
      const banners = [...storyRoot.querySelectorAll<HTMLElement>('[data-component="HeldInputBanner"]')];
      if (banners.length !== 3) throw new Error("Held input banners not rendered");
      for (const banner of banners) {
        if (banner.scrollWidth > banner.clientWidth) {
          throw new Error("Held input banner overflows horizontally");
        }
      }
      // Static contract: every shortcut hint carries the narrow-viewport hide rule.
      const hints = banners.flatMap(banner => [...banner.querySelectorAll<HTMLElement>("kbd")]);
      if (hints.some(hint => !hint.className.includes(\`[@media(max-width:\${NARROW_VIEWPORT_MAX_WIDTH_PX}px)]:hidden\`))) {
        throw new Error("Held input shortcut hints must be hidden below the narrow breakpoint");
      }
      // Rendered contract at whatever width this runs: hidden on phones (Pixel's phone variant,
      // the story's mobile viewport), shown only on the oldest banner otherwise (the test-runner
      // plays at desktop width).
      const narrow = window.matchMedia(\`(max-width: \${NARROW_VIEWPORT_MAX_WIDTH_PX}px)\`).matches;
      const visibleHints = banners.map(banner => [...banner.querySelectorAll<HTMLElement>("kbd")].filter(hint => getComputedStyle(hint).display !== "none").length);
      const expected = narrow ? [0, 0, 0] : [2, 0, 0];
      if (visibleHints.join() !== expected.join()) {
        throw new Error(\`Held input shortcut hints visible \${visibleHints.join()} (expected \${expected.join()}, narrow=\${narrow})\`);
      }
      // Only a confirmed report may say the task reported.
      if (!banners[0].textContent?.includes("the task reported") || banners[1].textContent?.includes("reported") || banners[2].textContent?.includes("reported")) {
        throw new Error("Held input banner wording does not match its refusal reason");
      }
    });
    const status = storyRoot.querySelector<HTMLButtonElement>('[data-component="QueuedMessageStatus"]');
    if (!status) throw new Error("Queued dispatch dropdown not rendered");
    await userEvent.click(status);
    await waitFor(() => {
      const menu = storyRoot.querySelector<HTMLElement>('[data-component="QueuedMessageDispatchMenu"]');
      if (!menu) throw new Error("Queued dispatch menu did not open");
      if (menu.querySelectorAll('[role="menuitem"]').length !== 3) {
        throw new Error("Queued dispatch menu must show exactly three actions");
      }
      if (menu.scrollWidth > menu.clientWidth) {
        throw new Error("Queued dispatch menu overflows horizontally");
      }
      for (const item of menu.querySelectorAll<HTMLElement>('[role="menuitem"]')) {
        if (item.scrollHeight > item.clientHeight) {
          throw new Error("Queued dispatch menu item wraps vertically");
        }
      }
    });
  }
}`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:'queuedButtonContrastStory("light")',...U.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:'queuedButtonContrastStory("dark")',...Q.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-focus-border",
    messages: []
  })} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const canvas = within(storyRoot);
    await waitForChatInputAutofocusDone(storyRoot);
    const textarea = await canvas.findByLabelText("Message");
    const surface = storyRoot.querySelector('[data-component="ChatInputSurface"]');
    if (!surface) throw new Error("Composer surface not rendered");
    blurActiveElement();
    const blurredBorder = getComputedStyle(surface).borderColor;
    textarea.focus();
    await waitFor(() => {
      if (getComputedStyle(surface).borderColor === blurredBorder) {
        throw new Error(\`Focusing the composer left its border at \${blurredBorder}\`);
      }
    });
  }
}`,...K.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ["thinking-selector"],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId: "ws-thinking-selector",
      aiSettings: {
        model: "openai:gpt-6.1-sol",
        thinkingLevel: "off",
        reasoningMode: "pro"
      },
      providersConfig: {
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true,
          serviceTier: "priority",
          cyberModelEnabled: true
        }
      },
      messages: []
    });
  }} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone", "laptop"]
      }
    },
    docs: {
      description: {
        story: "Opens the chat-input thinking selector with Pro and fast mode active and the Cyber row offered, including the phone-width layout."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    await userEvent.click(within(storyRoot).getByRole("button", {
      name: /Thinking:/i
    }));
    await waitFor(() => {
      const menu = storyRoot.querySelector<HTMLElement>('[data-component="ThinkingSelectorMenu"]');
      if (!menu) throw new Error("Thinking selector menu did not open");
      if (!within(menu).getByRole("button", {
        name: /Pro mode/i
      })) {
        throw new Error("Pro mode row missing");
      }
      if (!within(menu).getByRole("button", {
        name: /^Fast mode/i
      })) {
        throw new Error("Fast mode row missing");
      }
      if (!within(menu).getByRole("button", {
        name: /Cyber/
      })) {
        throw new Error("Cyber row missing");
      }
    });
  }
}`,...G.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ["thinking-selector"],
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId: "ws-thinking-selector-cyber",
      aiSettings: {
        model: "openai:gpt-6.1-sol",
        thinkingLevel: "off",
        reasoningMode: "cyber"
      },
      providersConfig: {
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true,
          cyberModelEnabled: true
        }
      },
      messages: []
    });
  }} />,
  parameters: {
    ...appMeta.parameters,
    // ThinkingSelectorOpen snapshots the Cyber row; this story checks the active-Cyber state.
    pixel: PIXEL_DISABLED,
    docs: {
      description: {
        story: "Opens the chat-input thinking selector with the OpenAI cyber model setting on and Cyber mode active."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    const trigger = within(storyRoot).getByRole("button", {
      name: /Thinking:/i
    });
    await expect(trigger).toHaveAccessibleName(/cyber mode/);
    await userEvent.click(trigger);
    const menu = await waitFor(() => {
      const match = storyRoot.querySelector<HTMLElement>('[data-component="ThinkingSelectorMenu"]');
      if (!match) throw new Error("Thinking selector menu did not open");
      return match;
    });
    await expect(within(menu).getByRole("button", {
      name: /Cyber/
    })).toHaveAttribute("aria-pressed", "true");
    await expect(within(menu).getByRole("button", {
      name: /Pro mode/i
    })).toHaveAttribute("aria-pressed", "false");
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ["thinking-selector"],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () =>
  // 380px puts the row at its tightest stage both in the test-runner's desktop window and in
  // Pixel's 390px phone viewport; min() yields to narrower viewports.
  <div data-testid="composer-width-wrapper" style={{
    width: "min(380px, 100%)",
    height: 700
  }}>
      <AppWithMocks setup={() => {
      collapseLeftSidebar();
      return setupSimpleChatStory({
        workspaceId: "ws-thinking-selector-ultrafast",
        aiSettings: {
          model: "openai:gpt-6.1-sol",
          thinkingLevel: "off"
        },
        providersConfig: {
          openai: {
            apiKeySet: true,
            isEnabled: true,
            isConfigured: true,
            serviceTier: "ultrafast",
            fastModePreviousServiceTier: "unset"
          }
        },
        messages: []
      });
    }} />
    </div>,
  parameters: {
    ...appMeta.parameters,
    // One snapshot pins the new indicator glyph; the play covers fit and state on every run.
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    },
    docs: {
      description: {
        story: "Ultrafast mode active on GPT-6.1 Sol: the closed selector shows the bolt-with-trails indicator and the open menu marks Ultrafast, not Fast."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    const trigger = within(storyRoot).getByRole("button", {
      name: /Thinking:/i
    });
    await expect(trigger).toHaveAccessibleName(/ultrafast mode/);
    const indicator = storyRoot.querySelector<HTMLElement>("[data-ultrafast-mode-indicator]");
    if (!indicator || indicator.getBoundingClientRect().width === 0) {
      throw new Error("Ultrafast indicator should be visible on the tightest composer row");
    }
    if (storyRoot.querySelector("[data-fast-mode-indicator]")) {
      throw new Error("Fast indicator must not render while Ultrafast is the active tier");
    }
    assertComposerPillGeometry(storyRoot);
    const row = storyRoot.querySelector<HTMLElement>('[data-component="ComposerControlRow"]');
    if (!row) throw new Error("Composer control row not rendered");
    if (row.scrollWidth > row.clientWidth) {
      throw new Error(\`Row overflows by \${row.scrollWidth - row.clientWidth}px with Ultrafast\`);
    }
    await userEvent.click(trigger);
    const menu = await waitFor(() => {
      const match = storyRoot.querySelector<HTMLElement>('[data-component="ThinkingSelectorMenu"]');
      if (!match) throw new Error("Thinking selector menu did not open");
      return match;
    });
    await expect(within(menu).getByRole("button", {
      name: /^Ultrafast mode/i
    })).toHaveAttribute("aria-pressed", "true");
    await expect(within(menu).getByRole("button", {
      name: /^Fast mode/i
    })).toHaveAttribute("aria-pressed", "false");
  }
}`,...O.parameters?.docs?.source},description:{story:`Ultrafast's closed-state indicator is Fast's bolt plus speed trails, so it is wider than the
Fast bolt. The fixed-width wrapper pins the tightest composer row (the test-runner ignores
viewport globals) to prove the wider indicator stays visible without overflowing the row.`,...O.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="composer-width-wrapper" style={{
    width: "min(900px, 100%)",
    height: 700
  }}>
      <AppWithMocks setup={() => {
      collapseLeftSidebar();
      // Active Pro and fast modes exercise both compact selector status indicators while the
      // narrow-width assertions prove the row still sheds optional detail before overflowing.
      return setupSimpleChatStory({
        workspaceId: "ws-composer-breakpoints",
        aiSettings: {
          model: "openai:gpt-6.1-sol",
          thinkingLevel: "off",
          reasoningMode: "pro"
        },
        providersConfig: {
          openai: {
            apiKeySet: true,
            isEnabled: true,
            isConfigured: true,
            serviceTier: "priority"
          }
        },
        messages: [createUserMessage("msg-1", "Summarize the composer layout rules", {
          historySequence: 1
        }), createAssistantMessage("msg-2", "The control row collapses in two stages.", {
          historySequence: 2,
          contextUsage: {
            inputTokens: 120_000,
            outputTokens: 8_000
          }
        })]
      });
    }} />
    </div>,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    const wrapper = within(storyRoot).getByTestId("composer-width-wrapper");
    const agentTrigger = within(storyRoot).getByLabelText("Select agent");
    const contextTrigger = storyRoot.querySelector<HTMLElement>('[aria-label^="Context usage"]');
    if (!contextTrigger) throw new Error("Context usage control not rendered");
    const rowWidth = () => {
      const row = storyRoot.querySelector<HTMLElement>('[data-component="ComposerControlRow"]');
      if (!row) throw new Error("Composer control row not rendered");
      return row.getBoundingClientRect().width;
    };
    const meterVisible = () => (storyRoot.querySelector("[data-context-usage-meter]")?.getBoundingClientRect().width ?? 0) > 0;
    const proStatus = storyRoot.querySelector<HTMLElement>("[data-thinking-pro-status]");
    if (!proStatus) throw new Error("Active PRO status not rendered");
    const proVisible = () => proStatus.getBoundingClientRect().width > 0;
    const fastIndicator = storyRoot.querySelector<HTMLElement>("[data-fast-mode-indicator]");
    if (!fastIndicator) throw new Error("Active fast-mode indicator not rendered");
    const fastVisible = () => fastIndicator.getBoundingClientRect().width > 0;
    async function resizeRowInto(wrapperWidth: number, min: number, max: number) {
      wrapper.style.width = \`\${wrapperWidth}px\`;
      await waitFor(() => {
        const width = rowWidth();
        if (width <= min || width >= max) {
          throw new Error(\`Wrapper \${wrapperWidth}px put the control row at \${Math.round(width)}px, outside the \${min}-\${max}px band this assertion needs\`);
        }
      });
    }
    const assertNoOverflow = (stage: string) => {
      assertComposerPillGeometry(storyRoot);
      const row = storyRoot.querySelector<HTMLElement>('[data-component="ComposerControlRow"]');
      if (!row) throw new Error("Composer control row not rendered");
      if (row.scrollWidth > row.clientWidth) {
        throw new Error(\`Row overflows by \${row.scrollWidth - row.clientWidth}px at the \${stage} stage\`);
      }
    };
    const fullModelLabel = storyRoot.querySelector<HTMLElement>('[data-model-label="full"]');
    const compactModelLabel = storyRoot.querySelector<HTMLElement>('[data-model-label="compact"]');
    if (!fullModelLabel || !compactModelLabel) {
      throw new Error("Responsive model labels not rendered");
    }
    const assertCompactModelLabel = () => {
      if (fullModelLabel.getBoundingClientRect().width > 0) {
        throw new Error("Full GPT family label should hide on a constrained composer row");
      }
      if (compactModelLabel.getBoundingClientRect().width === 0) {
        throw new Error("Compact model tier should be visible on a constrained composer row");
      }
      if (compactModelLabel.innerText.trim() !== "Sol") {
        throw new Error(\`Expected constrained GPT tier label "Sol", got "\${compactModelLabel.innerText}"\`);
      }
    };
    await resizeRowInto(380, 300, 341);
    await waitFor(() => {
      if (agentTrigger.innerText.trim() !== "") {
        throw new Error(\`Agent pill should be icon-only, showing "\${agentTrigger.innerText}"\`);
      }
      if (!/^\\d+%$/.test(contextTrigger.innerText.trim())) {
        throw new Error(\`Context pill should be percentage-only, showing "\${contextTrigger.innerText}"\`);
      }
      if (meterVisible()) throw new Error("Context meter should be hidden on an icon-only row");
      if (proVisible()) throw new Error("PRO status should be hidden on the tightest row");
      if (!fastVisible()) throw new Error("Fast-mode lightning should stay visible on narrow rows");
      assertCompactModelLabel();
      assertNoOverflow("tightest");
    });
    await resizeRowInto(405, 344, 359);
    await waitFor(() => {
      if (agentTrigger.innerText.trim() !== "") {
        throw new Error(\`Agent pill should still be icon-only at or below 360px, showing "\${agentTrigger.innerText}"\`);
      }
      if (!proVisible()) throw new Error("PRO status should return once the row clears 340px");
      assertCompactModelLabel();
      assertNoOverflow("pro-returns");
    });

    // Phone-width workspace rows land here. The agent label does not fit alongside the context pill
    // yet, so it must stay hidden rather than clip, and the model name must keep its own room.
    await resizeRowInto(454, 365, 445);
    await waitFor(() => {
      if (agentTrigger.innerText.trim() !== "") {
        throw new Error(\`Agent pill should stay icon-only while the context pill shares the row, showing "\${agentTrigger.innerText}"\`);
      }
      assertNoOverflow("phone-width");
      assertCompactModelLabel();
      const modelName = storyRoot.querySelector<HTMLElement>('[data-component="ModelSelectorGroup"] button span');
      if (!modelName) throw new Error("Model name not rendered");
      if (modelName.scrollWidth > modelName.clientWidth) {
        throw new Error(\`Model name is clipped to "\${modelName.innerText}" at a phone-width row that has room for it\`);
      }
    });
    await resizeRowInto(524, 455, 495);
    await waitFor(() => {
      if (agentTrigger.innerText.trim() === "") {
        throw new Error("Agent pill should show its label once the row clears 450px");
      }
      if (!/^\\d+%$/.test(contextTrigger.innerText.trim())) {
        throw new Error(\`Context pill should stay percentage-only at or below 500px, showing "\${contextTrigger.innerText}"\`);
      }
      if (meterVisible()) throw new Error("Context meter should stay hidden at or below 500px");
      if (!proVisible()) throw new Error("PRO status should stay visible above 340px");
      assertCompactModelLabel();
      assertNoOverflow("agent-label-returns");
    });
    await resizeRowInto(620, 505, 1200);
    await waitFor(() => {
      if (!/^\\d+%$/.test(contextTrigger.innerText.trim())) {
        throw new Error(\`Context control should keep its concise percentage label, showing "\${contextTrigger.innerText}"\`);
      }
      if (!meterVisible()) throw new Error("Context meter should be visible above 500px");
      assertNoOverflow("full-detail");
      if (fullModelLabel.getBoundingClientRect().width === 0) {
        throw new Error("Full model label should return once the composer row clears 500px");
      }
      if (compactModelLabel.getBoundingClientRect().width > 0) {
        throw new Error("Compact model label should hide once the full label has room");
      }

      // Checked here rather than on a narrow row because a narrow row is under flex-shrink pressure,
      // which trims a fixed width down to roughly its content width and hides the difference. With
      // slack available, a fixed width sits at its full cap while a content-sized one does not.
      const modelTrigger = storyRoot.querySelector<HTMLElement>('[data-component="ModelSelectorGroup"] button');
      if (!modelTrigger) throw new Error("Model trigger not rendered");
      const triggerWidth = modelTrigger.getBoundingClientRect().width;
      const capPx = 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      if (triggerWidth >= capPx - 8) {
        throw new Error(\`Model trigger reserves \${Math.round(triggerWidth)}px of its \${Math.round(capPx)}px cap for a short name instead of sizing to content\`);
      }
    });
  }
}`,...A.parameters?.docs?.source},description:{story:`The composer control row collapses on container width, not viewport width, so a fixed-width
wrapper reproduces every stage: the play resizes the wrapper and asserts each one. Guarding on the
measured row width keeps the assertions honest if the surrounding layout ever changes, and each
stage also asserts the row does not overflow, since a threshold set too low trades a hidden label
for clipped controls.`,...A.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: NarrowControlRowCollapse.render,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        viewports: ["phone", "laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    await waitFor(() => assertComposerPillGeometry(storyRoot));

    // Pixel and the test-runner do not emulate coarse pointers.
    const wrapper = within(storyRoot).getByTestId("composer-width-wrapper");
    const originalWidth = wrapper.style.width;
    const touchFloor = document.createElement("style");
    touchFloor.textContent = \`[data-component="ComposerControlRow"] button { min-height: \${MOBILE_TOUCH_TARGET_PX}px; min-width: \${MOBILE_TOUCH_TARGET_PX}px; }\`;
    document.head.append(touchFloor);
    wrapper.style.width = "390px";
    try {
      await waitFor(() => assertComposerPillGeometry(storyRoot, true));
    } finally {
      touchFloor.remove();
      wrapper.style.width = originalWidth;
    }
  }
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-editing";

    // Ensure a deterministic starting state (Storybook can preserve localStorage
    // across story runs in the same session).
    setWorkspaceInput(workspaceId, "");
    return setupSimpleChatStory({
      workspaceId,
      messages: [createUserMessage("msg-1", "Add authentication to the user API endpoint", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 300000
      }), createAssistantMessage("msg-2", "I'll help you add authentication. Let me check the current implementation and add JWT validation.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 290000,
        toolCalls: [createFileReadTool("call-1", "src/api/users.ts", "export function getUser(req, res) {\\n  const user = db.users.find(req.params.id);\\n  res.json(user);\\n}")]
      }), createUserMessage("msg-3", "Actually, can you use a different approach?", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 280000
      }), createAssistantMessage("msg-4", "Of course! I can use a different authentication approach. What would you prefer?", {
        historySequence: 4,
        timestamp: STABLE_TIMESTAMP - 270000
      })]
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const canvas = within(storyRoot);

    // Wait for user message actions to render (Edit buttons only appear on user messages)
    const editButtons = await canvas.findAllByLabelText("Edit", {}, {
      timeout: 10000
    });
    if (editButtons.length === 0) throw new Error("No edit buttons found");

    // Click edit on the first user message
    await userEvent.click(editButtons[0]);

    // Wait for the editing state to be applied
    await waitFor(() => {
      canvas.getByLabelText("Edit message");
      const surface = storyRoot.querySelector('[data-component="ChatInputSurface"]');
      if (!surface?.classList.contains("border-editing-mode")) {
        throw new Error("Composer surface not in editing state");
      }
    });

    // Verify the edit cutoff barrier appears
    await canvas.findByText("Messages below will be removed when you submit");
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the editing message state with the amber-styled input border and edit cutoff barrier indicating messages that will be removed."
      }
    }
  }
}`,...$.parameters?.docs?.source},description:{story:`Editing message state - shows the edit cutoff barrier and amber-styled input.
Demonstrates the UI when a user clicks "Edit" on a previous message.`,...$.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDockAlignmentStory(true)} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    await assertDockSurfacesMatchTranscript(storyRoot, "full-width");
  }
}`,...z.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDockAlignmentStory(false)} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    await assertDockSurfacesMatchTranscript(storyRoot, "capped");
  }
}`,...X.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    setAutoRoutingPick("ws-auto-routing", "exec", "model", true);
    return setupSimpleChatStory({
      workspaceId: "ws-auto-routing",
      aiSettings: {
        model: "openai:gpt-5.6-sol",
        thinkingLevel: "off"
      },
      experiments: {
        [EXPERIMENT_IDS.AUTO_MODEL_ROUTING]: true
      },
      providersConfig: {
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      },
      messages: []
    });
  }} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone", "laptop"]
      }
    },
    docs: {
      description: {
        story: "Composer with the auto-model-routing experiment on and Auto selected: the model trigger reads Auto and the picker pins the Auto row above the concrete models."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    const trigger = within(storyRoot).getByRole("combobox");
    await waitFor(() => {
      if (!trigger.textContent?.includes("Auto")) throw new Error("Trigger does not read Auto");
    });
    await userEvent.click(trigger);
    await waitFor(() => {
      const autoRow = storyRoot.querySelector<HTMLElement>("[data-auto-routing-option]");
      if (autoRow?.getAttribute("aria-selected") !== "true") {
        throw new Error("Auto row is not the selected option");
      }
    });
  }
}`,...J.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId: "ws-auto-routing-keyboard",
      aiSettings: {
        model: "openai:gpt-5.6-sol",
        thinkingLevel: "off"
      },
      experiments: {
        [EXPERIMENT_IDS.AUTO_MODEL_ROUTING]: true
      },
      providersConfig: {
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      },
      messages: []
    });
  }} />,
  parameters: {
    ...appMeta.parameters,
    docs: {
      description: {
        story: "Opens the model picker with Auto off, moves the highlight above the first model with ArrowUp, and selects Auto with Enter."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForChatInputAutofocusDone(storyRoot);
    blurActiveElement();
    const trigger = within(storyRoot).getByRole("combobox");
    if (trigger.textContent?.includes("Auto")) throw new Error("Auto should start inactive");
    await userEvent.click(trigger);
    await within(storyRoot).findByPlaceholderText(/Search \\[provider:model-name\\]/i);
    await userEvent.keyboard("{ArrowUp}");
    await waitFor(() => {
      const autoRow = storyRoot.querySelector<HTMLElement>("[data-auto-routing-option]");
      if (autoRow?.getAttribute("data-highlighted") !== "true") {
        throw new Error("ArrowUp did not highlight the Auto row");
      }
    });
    await userEvent.keyboard("{Enter}");
    await waitFor(() => {
      const nextTrigger = within(storyRoot).getByRole("combobox");
      if (!nextTrigger.textContent?.includes("Auto")) throw new Error("Enter did not select Auto");
    });
  }
}`,...F.parameters?.docs?.source},description:{story:"Keyboard-only path onto Auto: the row sits above the first model in the arrow-key order.",...F.parameters?.docs?.description}}};const ze=["VoiceInputNoApiKey","VoiceInputEnvApiKey","ComposerTooltip","TranscriptOnlyHeldInput","QueuedFollowUp","QueuedButtonsContrastLight","QueuedButtonsContrastDark","FocusedComposer","ThinkingSelectorOpen","ThinkingSelectorCyberOpen","ThinkingSelectorUltrafast","NarrowControlRowCollapse","ComposerPillHeights","EditingMessage","FullWidthTranscriptAlignment","CenteredTranscriptAlignment","AutoModelRoutingActive","AutoModelRoutingKeyboard"];export{J as AutoModelRoutingActive,F as AutoModelRoutingKeyboard,X as CenteredTranscriptAlignment,V as ComposerPillHeights,N as ComposerTooltip,$ as EditingMessage,K as FocusedComposer,z as FullWidthTranscriptAlignment,A as NarrowControlRowCollapse,Q as QueuedButtonsContrastDark,U as QueuedButtonsContrastLight,_ as QueuedFollowUp,j as ThinkingSelectorCyberOpen,G as ThinkingSelectorOpen,O as ThinkingSelectorUltrafast,H as TranscriptOnlyHeldInput,P as VoiceInputEnvApiKey,W as VoiceInputNoApiKey,ze as __namedExportsOrder,Ve as default};
