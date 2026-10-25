import{j as p,d as g,c as u,a as f,S as w}from"./iframe-DwmVy7SQ.js";import{a as m,A as y}from"./meta-CT6GdK4g.js";import{s as k}from"./chatSetup-D_GSrzyc.js";import{a as E,c as b}from"./messages-ajL82_FT.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";const{userEvent:h,waitFor:l,within:r}=__STORYBOOK_MODULE_TEST__,d=/allow messages from unrelated workspaces/i,x="ws-unrelated-messaging-consent";function v(){return u(),f(),k({workspaceId:x,workspaceName:"release-coordinator",projectName:"mux",messages:[E("consent-user","Let the other release chats reach this one.",{historySequence:1,timestamp:w-6e4}),b("consent-assistant","Only you can allow that: open Workspace actions → Messages from other workspaces.",{historySequence:2,timestamp:w})]})}async function S(n){const e=r(n);await h.click(await e.findByTestId("workspace-more-actions")),await h.click(await l(()=>r(document.body).getByTestId("workspace-unrelated-messaging-button")));const t=await l(()=>r(document.body).getByRole("dialog",{name:"Messages from other workspaces"}),{timeout:1e4}),o=t.getAttribute("aria-describedby");if(!o||!document.getElementById(o)?.textContent?.trim())throw new Error("Consent dialog must expose a readable accessible description");return t}const te={...m,title:"App/UnrelatedMessagingConsent"},a={render:()=>p.jsx(y,{setup:v}),parameters:{...m.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async({canvasElement:n})=>{const e=await S(n),t=r(e).getByRole("switch",{name:d});if(t.getAttribute("aria-checked")!=="false")throw new Error("consent switch must start off for a workspace without a generation");if(await h.click(t),await l(()=>{if(r(e).getByRole("switch",{name:d}).getAttribute("aria-checked")!=="true")throw new Error("switch did not follow the published consent metadata")}),r(e).getByRole("switch",{name:d}).hasAttribute("disabled"))throw new Error("switch stayed locked after the backend acknowledged")}},i=390;function _(n){const e=g.c(3);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t={width:i,height:844,overflow:"hidden"},e[0]=t):t=e[0];let o;return e[1]!==n?(o=p.jsx("div",{"data-consent-phone-width":i,style:t,children:p.jsx(n,{})}),e[1]=n,e[2]=o):o=e[2],o}const s={...a,globals:{viewport:{value:"consentPhone",isRotated:!1}},decorators:[_],parameters:{...m.parameters,viewport:{options:{consentPhone:{name:"Phone 390",styles:{width:`${i}px`,height:"844px"},type:"mobile"}}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async n=>{await a.play?.(n);const e=n.canvasElement.querySelector("[data-consent-phone-width]");if(!e)throw new Error("phone frame decorator did not render");if(e.getBoundingClientRect().width!==i)throw new Error(`phone frame is ${e.getBoundingClientRect().width}px wide; expected ${i}px`);if(window.innerWidth<=i){const t=r(document.body).getByRole("dialog",{name:"Messages from other workspaces"});for(const o of[t,...t.querySelectorAll("*")]){const c=o.getBoundingClientRect();if(c.right>window.innerWidth+1||c.left<-1)throw new Error(`consent dialog content overflowed the ${window.innerWidth}px viewport (${Math.round(c.left)}..${Math.round(c.right)})`)}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupConsentStory} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await openConsentDialog(canvasElement);
    const toggle = within(dialog).getByRole("switch", {
      name: CONSENT_SWITCH_NAME
    });
    // A workspace without a generation (created before the on-by-default change, or turned off)
    // starts off.
    if (toggle.getAttribute("aria-checked") !== "false") {
      throw new Error("consent switch must start off for a workspace without a generation");
    }
    await userEvent.click(toggle);
    // The mock acks like the backend does — by publishing metadata — and only then may the
    // switch report "on". Asserting through waitFor keeps the contract: no optimistic flip.
    await waitFor(() => {
      if (within(dialog).getByRole("switch", {
        name: CONSENT_SWITCH_NAME
      }).getAttribute("aria-checked") !== "true") {
        throw new Error("switch did not follow the published consent metadata");
      }
    });
    if (within(dialog).getByRole("switch", {
      name: CONSENT_SWITCH_NAME
    }).hasAttribute("disabled")) {
      throw new Error("switch stayed locked after the backend acknowledged");
    }
    // Leave the dialog open (switch on) for the visual baseline.
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  globals: {
    viewport: {
      value: "consentPhone",
      isRotated: false
    }
  },
  decorators: [PhoneDecorator],
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        consentPhone: {
          name: "Phone 390",
          styles: {
            width: \`\${PHONE_WIDTH}px\`,
            height: "844px"
          },
          type: "mobile"
        }
      }
    },
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async context => {
    await Desktop.play?.(context);
    const frame = context.canvasElement.querySelector<HTMLElement>("[data-consent-phone-width]");
    if (!frame) throw new Error("phone frame decorator did not render");
    if (frame.getBoundingClientRect().width !== PHONE_WIDTH) {
      throw new Error(\`phone frame is \${frame.getBoundingClientRect().width}px wide; expected \${PHONE_WIDTH}px\`);
    }
    // Only a genuinely narrow viewport (manager/Pixel phone) constrains the portaled dialog;
    // the desktop-sized test-runner cannot, so the fit assertion is guarded on it.
    if (window.innerWidth <= PHONE_WIDTH) {
      const dialog = within(document.body).getByRole("dialog", {
        name: "Messages from other workspaces"
      });
      for (const element of [dialog, ...dialog.querySelectorAll<HTMLElement>("*")]) {
        const rect = element.getBoundingClientRect();
        if (rect.right > window.innerWidth + 1 || rect.left < -1) {
          throw new Error(\`consent dialog content overflowed the \${window.innerWidth}px viewport (\${Math.round(rect.left)}..\${Math.round(rect.right)})\`);
        }
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Phone-width contract: the disclosure copy wraps inside a 390px dialog with the switch still
reachable. Pinned to the Pixel phone viewport with a matching 390px viewport; the dialog
portals to document.body, so containment is measured against the window rather than the
decorator frame, after checking the rendered frame width.`,...s.parameters?.docs?.description}}};const ne=["Desktop","Phone390"];export{a as Desktop,s as Phone390,ne as __namedExportsOrder,te as default};
