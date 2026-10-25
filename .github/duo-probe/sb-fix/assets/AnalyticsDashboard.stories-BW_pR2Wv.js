import{j as u,aW as B,aK as E,aL as S,aM as j,d as U,bI as A,q as l,N as D}from"./iframe-DwmVy7SQ.js";import{t as _}from"./contrast-Bnc7IxMq.js";import{l as M,h as N}from"./meta-CT6GdK4g.js";import{c as T,g as O}from"./workspaces-DVCSHIwS.js";import{c as I}from"./orpc-sAt07-6s.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:p,userEvent:w,waitFor:m,within:y}=__STORYBOOK_MODULE_TEST__,Pe={...M,title:"Analytics/AnalyticsDashboard"},n={atlas:"/home/user/projects/atlas-api",orbit:"/home/user/projects/orbit-web",docs:"/home/user/projects/docs-site"};function c(t){const e=new Date(D);return e.setUTCDate(e.getUTCDate()-t),e.toISOString().split("T")[0]}const q=new Set(Object.values(n)),L=new Map([[null,{totalSpendUsd:184.73,todaySpendUsd:6.42,avgDailySpendUsd:4.11,cacheHitRatio:.43,totalTokens:842e4,totalResponses:1286}],[n.atlas,{totalSpendUsd:91.42,todaySpendUsd:3.24,avgDailySpendUsd:2.98,cacheHitRatio:.47,totalTokens:412e4,totalResponses:602}],[n.orbit,{totalSpendUsd:63.18,todaySpendUsd:2.11,avgDailySpendUsd:2.14,cacheHitRatio:.41,totalTokens:278e4,totalResponses:421}],[n.docs,{totalSpendUsd:30.13,todaySpendUsd:1.07,avgDailySpendUsd:1.05,cacheHitRatio:.35,totalTokens:152e4,totalResponses:263}]]),W=[{projectName:"atlas-api",projectPath:n.atlas,costUsd:91.42,tokenCount:412e4},{projectName:"orbit-web",projectPath:n.orbit,costUsd:63.18,tokenCount:278e4},{projectName:"docs-site",projectPath:n.docs,costUsd:30.13,tokenCount:152e4}],b=[{projectPath:n.atlas,model:"openai:gpt-5-mini",costUsd:39.6,tokenCount:194e4,responseCount:302},{projectPath:n.atlas,model:"anthropic:claude-sonnet-4-20250514",costUsd:29.2,tokenCount:13e5,responseCount:196},{projectPath:n.atlas,model:"openai:gpt-4.1",costUsd:22.62,tokenCount:88e4,responseCount:104},{projectPath:n.orbit,model:"anthropic:claude-sonnet-4-20250514",costUsd:26.8,tokenCount:114e4,responseCount:161},{projectPath:n.orbit,model:"openai:gpt-5-mini",costUsd:21.9,tokenCount:96e4,responseCount:145},{projectPath:n.orbit,model:"xai:grok-4-fast",costUsd:14.48,tokenCount:68e4,responseCount:115},{projectPath:n.docs,model:"openai:gpt-4.1",costUsd:8.58,tokenCount:62e4,responseCount:97},{projectPath:n.docs,model:"anthropic:claude-sonnet-4-20250514",costUsd:6.9,tokenCount:26e4,responseCount:38},{projectPath:n.docs,model:"xai:grok-4-fast",costUsd:6.05,tokenCount:34e4,responseCount:45},{projectPath:n.docs,model:"openai:gpt-5-mini",costUsd:8.6,tokenCount:3e5,responseCount:83}],R=[{model:"openai:gpt-5-mini",inputTokens:132e4,cachedTokens:74e4,cacheCreateTokens:22e4,outputTokens:66e4,reasoningTokens:26e4,totalTokens:32e5,requestCount:530},{model:"anthropic:claude-sonnet-4-20250514",inputTokens:102e4,cachedTokens:62e4,cacheCreateTokens:18e4,outputTokens:52e4,reasoningTokens:36e4,totalTokens:27e5,requestCount:395},{model:"openai:gpt-4.1",inputTokens:67e4,cachedTokens:28e4,cacheCreateTokens:9e4,outputTokens:33e4,reasoningTokens:13e4,totalTokens:15e5,requestCount:201},{model:"xai:grok-4-fast",inputTokens:43e4,cachedTokens:21e4,cacheCreateTokens:7e4,outputTokens:22e4,reasoningTokens:9e4,totalTokens:102e4,requestCount:160}];for(const t of R){const e=t.inputTokens+t.cachedTokens+t.cacheCreateTokens+t.outputTokens+t.reasoningTokens;l(e===t.totalTokens,`Token breakdown fixture must sum to totalTokens for ${t.model}`)}const C=[{projectPath:n.atlas,bucket:c(7),model:"openai:gpt-5-mini",costUsd:6.2},{projectPath:n.atlas,bucket:c(7),model:"anthropic:claude-sonnet-4-20250514",costUsd:3.8},{projectPath:n.atlas,bucket:c(6),model:"openai:gpt-5-mini",costUsd:7.1},{projectPath:n.atlas,bucket:c(6),model:"anthropic:claude-sonnet-4-20250514",costUsd:4.4},{projectPath:n.atlas,bucket:c(5),model:"openai:gpt-4.1",costUsd:2.1},{projectPath:n.atlas,bucket:c(4),model:"openai:gpt-5-mini",costUsd:6.8},{projectPath:n.orbit,bucket:c(7),model:"anthropic:claude-sonnet-4-20250514",costUsd:4.2},{projectPath:n.orbit,bucket:c(6),model:"openai:gpt-5-mini",costUsd:3.5},{projectPath:n.orbit,bucket:c(5),model:"xai:grok-4-fast",costUsd:2.8},{projectPath:n.orbit,bucket:c(3),model:"openai:gpt-4.1",costUsd:2.4},{projectPath:n.orbit,bucket:c(1),model:"openai:gpt-5-mini",costUsd:3.9},{projectPath:n.docs,bucket:c(7),model:"openai:gpt-4.1",costUsd:1.4},{projectPath:n.docs,bucket:c(6),model:"xai:grok-4-fast",costUsd:1.1},{projectPath:n.docs,bucket:c(5),model:"anthropic:claude-sonnet-4-20250514",costUsd:1.6},{projectPath:n.docs,bucket:c(4),model:"openai:gpt-5-mini",costUsd:1.3},{projectPath:n.docs,bucket:c(3),model:"openai:gpt-4.1",costUsd:1.2},{projectPath:n.docs,bucket:c(2),model:"xai:grok-4-fast",costUsd:1},{projectPath:n.docs,bucket:c(1),model:"anthropic:claude-sonnet-4-20250514",costUsd:1.5}],H={ttft:{p50:390,p90:840,p99:1450,histogram:[{bucket:200,count:101},{bucket:350,count:218},{bucket:500,count:179},{bucket:700,count:109},{bucket:1e3,count:44},{bucket:1400,count:16}]},duration:{p50:2400,p90:6100,p99:12900,histogram:[{bucket:1e3,count:88},{bucket:2e3,count:196},{bucket:3e3,count:152},{bucket:5e3,count:104},{bucket:8e3,count:51},{bucket:12e3,count:19}]},tps:{p50:38,p90:82,p99:118,histogram:[{bucket:12,count:23},{bucket:24,count:85},{bucket:36,count:173},{bucket:48,count:158},{bucket:72,count:94},{bucket:108,count:26}]}},$={[n.atlas]:{percentileScale:.92,countScale:1.15},[n.orbit]:{percentileScale:1.08,countScale:.9},[n.docs]:{percentileScale:1.18,countScale:.58}},f=[{agentId:"exec",costUsd:72.11,tokenCount:301e4,responseCount:426},{agentId:"plan",costUsd:38.42,tokenCount:154e4,responseCount:219},{agentId:"explore",costUsd:26.71,tokenCount:119e4,responseCount:178},{agentId:"compact",costUsd:17.58,tokenCount:97e4,responseCount:126},{agentId:"docs",costUsd:12.95,tokenCount:71e4,responseCount:101},{agentId:"research",costUsd:9.04,tokenCount:49e4,responseCount:71},{agentId:"review",costUsd:7.92,tokenCount:39e4,responseCount:57}],F={[n.atlas]:{costScale:.52,tokenScale:.54},[n.orbit]:{costScale:.36,tokenScale:.35},[n.docs]:{costScale:.18,tokenScale:.19}},x=[{provider:"anthropic",cacheHitRatio:.56,responseCount:512},{provider:"openai",cacheHitRatio:.43,responseCount:463},{provider:"google",cacheHitRatio:.37,responseCount:201},{provider:"unknown",cacheHitRatio:.21,responseCount:110}],G={[n.atlas]:{ratioScale:1.06,responseScale:.55},[n.orbit]:{ratioScale:.94,responseScale:.35},[n.docs]:{ratioScale:.82,responseScale:.2}},v=new Map([[null,{totalChildren:286,totalTokensConsumed:271e4,totalReportTokens:296e3,compressionRatio:9.2,totalCostDelegated:58.34,byAgentType:[{agentType:"explore",count:108,totalTokens:87e4,inputTokens:43e4,outputTokens:3e5,reasoningTokens:9e4,cachedTokens:4e4,cacheCreateTokens:1e4},{agentType:"exec",count:136,totalTokens:143e4,inputTokens:7e5,outputTokens:5e5,reasoningTokens:15e4,cachedTokens:6e4,cacheCreateTokens:2e4},{agentType:"plan",count:42,totalTokens:41e4,inputTokens:21e4,outputTokens:12e4,reasoningTokens:5e4,cachedTokens:2e4,cacheCreateTokens:1e4}]}],[n.atlas,{totalChildren:144,totalTokensConsumed:141e4,totalReportTokens:15e4,compressionRatio:9.4,totalCostDelegated:31.12,byAgentType:[{agentType:"explore",count:56,totalTokens:44e4,inputTokens:22e4,outputTokens:15e4,reasoningTokens:4e4,cachedTokens:2e4,cacheCreateTokens:1e4},{agentType:"exec",count:69,totalTokens:76e4,inputTokens:36e4,outputTokens:28e4,reasoningTokens:7e4,cachedTokens:35e3,cacheCreateTokens:15e3},{agentType:"plan",count:19,totalTokens:21e4,inputTokens:11e4,outputTokens:6e4,reasoningTokens:2e4,cachedTokens:15e3,cacheCreateTokens:5e3}]}],[n.orbit,{totalChildren:96,totalTokensConsumed:935e3,totalReportTokens:107e3,compressionRatio:8.7,totalCostDelegated:19.57,byAgentType:[{agentType:"explore",count:33,totalTokens:3e5,inputTokens:15e4,outputTokens:1e5,reasoningTokens:3e4,cachedTokens:15e3,cacheCreateTokens:5e3},{agentType:"exec",count:48,totalTokens:49e4,inputTokens:24e4,outputTokens:17e4,reasoningTokens:45e3,cachedTokens:25e3,cacheCreateTokens:1e4},{agentType:"plan",count:15,totalTokens:145e3,inputTokens:7e4,outputTokens:45e3,reasoningTokens:15e3,cachedTokens:1e4,cacheCreateTokens:5e3}]}],[n.docs,{totalChildren:46,totalTokensConsumed:365e3,totalReportTokens:39e3,compressionRatio:9.4,totalCostDelegated:7.65,byAgentType:[{agentType:"explore",count:19,totalTokens:13e4,inputTokens:65e3,outputTokens:4e4,reasoningTokens:15e3,cachedTokens:7e3,cacheCreateTokens:3e3},{agentType:"exec",count:19,totalTokens:18e4,inputTokens:85e3,outputTokens:6e4,reasoningTokens:2e4,cachedTokens:1e4,cacheCreateTokens:5e3},{agentType:"plan",count:8,totalTokens:55e3,inputTokens:25e3,outputTokens:18e3,reasoningTokens:7e3,cachedTokens:3e3,cacheCreateTokens:2e3}]}]]);for(const[t,e]of v.entries()){const a=e.byAgentType.reduce((r,i)=>r+i.count,0);l(a===e.totalChildren,`Delegation fixture child counts must sum to totalChildren for ${t??"all"}`);const o=e.byAgentType.reduce((r,i)=>r+i.totalTokens,0);l(o===e.totalTokensConsumed,`Delegation fixture token counts must sum to totalTokensConsumed for ${t??"all"}`);for(const r of e.byAgentType){const i=r.inputTokens+r.cachedTokens+r.cacheCreateTokens+r.outputTokens+r.reasoningTokens;l(i===r.totalTokens,`Delegation fixture token categories must sum to totalTokens for ${t??"all"} (${r.agentType})`)}const s=Number((e.totalTokensConsumed/Math.max(1,e.totalReportTokens)).toFixed(1));l(Math.abs(e.compressionRatio-s)<=.1,`Delegation fixture compressionRatio must match derived ratio for ${t??"all"}`)}function d(t){return t==null?null:(l(q.has(t),`Unexpected analytics projectPath: ${t}`),t)}function Y(t){const e=t.projectPath===null?C:C.filter(o=>o.projectPath===t.projectPath),a=new Map;for(const o of e){const s=`${o.bucket}|${o.model}`,r=a.get(s);if(r){r.costUsd+=o.costUsd;continue}a.set(s,{bucket:o.bucket,model:o.model,costUsd:o.costUsd})}return Array.from(a.values()).sort((o,s)=>o.bucket===s.bucket?o.model.localeCompare(s.model):o.bucket.localeCompare(s.bucket))}function z(t){const e=t===null?b:b.filter(o=>o.projectPath===t),a=new Map;for(const o of e){const s=a.get(o.model);if(s){s.costUsd+=o.costUsd,s.tokenCount+=o.tokenCount,s.responseCount+=o.responseCount;continue}a.set(o.model,{model:o.model,costUsd:o.costUsd,tokenCount:o.tokenCount,responseCount:o.responseCount})}return Array.from(a.values()).sort((o,s)=>s.costUsd-o.costUsd)}function J(t,e,a){return{p50:Math.round(t.p50*e),p90:Math.round(t.p90*e),p99:Math.round(t.p99*e),histogram:t.histogram.map(o=>({bucket:o.bucket,count:Math.max(1,Math.round(o.count*a))}))}}function K(t,e){const a=H[t];if(e===null)return a;const o=$[e];return J(a,o.percentileScale,o.countScale)}function V(t){if(t===null)return f;const e=F[t];return f.map(a=>({agentId:a.agentId,costUsd:Number((a.costUsd*e.costScale).toFixed(2)),tokenCount:Math.round(a.tokenCount*e.tokenScale),responseCount:Math.max(1,Math.round(a.responseCount*e.costScale))})).filter(a=>a.costUsd>1.5)}function Q(t){if(t===null)return x;const e=G[t];return x.map(a=>({provider:a.provider,cacheHitRatio:Math.max(0,Math.min(.98,Number((a.cacheHitRatio*e.ratioScale).toFixed(3)))),responseCount:Math.max(1,Math.round(a.responseCount*e.responseScale))})).filter(a=>a.responseCount>=12)}function X(){const t=[T({id:"ws-analytics-atlas",name:"feature/observability-rollup",projectName:"atlas-api",projectPath:n.atlas}),T({id:"ws-analytics-orbit",name:"feature/checkout-funnel",projectName:"orbit-web",projectPath:n.orbit}),T({id:"ws-analytics-docs",name:"docs/launch-playbook",projectName:"docs-site",projectPath:n.docs})],e=I({projects:O(t),workspaces:t}),a={getSummary:s=>{const r=d(s.projectPath??null),i=L.get(r);return l(i!=null,`Missing analytics summary fixture for scope ${r??"all"}`),Promise.resolve(i)},getSpendOverTime:s=>{l(s.granularity==="hour"||s.granularity==="day"||s.granularity==="week",`Unsupported granularity for analytics story: ${s.granularity}`);const r=d(s.projectPath??null);return Promise.resolve(Y({projectPath:r,from:s.from??null,to:s.to??null}))},getSpendByProject:()=>Promise.resolve(W),getSpendByModel:s=>{const r=d(s.projectPath??null);return Promise.resolve(z(r))},getTokensByModel:s=>(d(s.projectPath??null),Promise.resolve(R)),getTimingDistribution:s=>{const r=d(s.projectPath??null);return Promise.resolve(K(s.metric,r))},getAgentCostBreakdown:s=>{const r=d(s.projectPath??null);return Promise.resolve(V(r))},getCacheHitRatioByProvider:s=>{const r=d(s.projectPath??null);return Promise.resolve(Q(r))},getDelegationSummary:s=>{const r=d(s.projectPath??null),i=v.get(r);return l(i!=null,`Missing delegation summary fixture for scope ${r??"all"}`),Promise.resolve(i)},executeRawQuery:s=>(l(typeof s.sql=="string","Analytics raw-query story mock expects SQL text input"),Promise.resolve({columns:[{name:"model",type:"VARCHAR"},{name:"total_cost",type:"DOUBLE"}],rows:[{model:"openai:gpt-5-mini",total_cost:72.1},{model:"anthropic:claude-sonnet-4-20250514",total_cost:51.3}],truncated:!1,rowCount:2,rowCountExact:!0,durationMs:12})),rebuildDatabase:()=>Promise.resolve({success:!0,workspacesIngested:t.length})},o=e;return o.analytics=a,o}function Z(){const t=U.c(3),{navigateToAnalytics:e}=A();let a,o;return t[0]!==e?(a=()=>{e()},o=[e],t[0]=e,t[1]=a,t[2]=o):(a=t[1],o=t[2]),B.useEffect(a,o),null}function P(){const t=B.useRef(X()).current;return u.jsx(E,{client:t,children:u.jsx(S,{children:u.jsxs(j,{children:[u.jsx(Z,{}),u.jsx(N,{})]})})})}async function g(t){return y(t.ownerDocument.body).findByRole("dialog",{name:"Analytics"},{timeout:1e4})}const h={render:()=>u.jsx(P,{}),globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:t})=>{const e=await g(t),a=y(e);if(await a.findByText("Total Spend"),await a.findByRole("button",{name:"Local"}),await a.findByRole("button",{name:"UTC"}),await a.findByRole("button",{name:"7D"}),await a.findByRole("button",{name:"All"}),await new Promise(o=>requestAnimationFrame(()=>requestAnimationFrame(()=>o()))),window.innerWidth<768){const o=e.getBoundingClientRect();await p(o.left).toBe(0),await p(o.width).toBe(window.innerWidth),await p(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth);const s=a.getByTestId("analytics-header");await p(s.scrollWidth).toBeLessThanOrEqual(s.clientWidth);const r=a.getByRole("button",{name:"Close analytics"});await p(r.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth)}}},k={render:()=>u.jsx(P,{}),play:async({canvasElement:t})=>{const e=y(await g(t));await e.findByText("Total Spend"),await e.findByText("$184.73");const a=await e.findByRole("button",{name:"Local"}),o=await e.findByRole("button",{name:"UTC"});a.getAttribute("aria-pressed")!=="true"&&(await w.click(a),await m(()=>{if(a.getAttribute("aria-pressed")!=="true")throw new Error("Expected local timezone mode to become selected")})),await w.click(o),await m(()=>{if(o.getAttribute("aria-pressed")!=="true")throw new Error("Expected UTC timezone mode to become selected")}),await e.findByRole("heading",{name:/spend over time/i}),await e.findByRole("heading",{name:/spend by project/i}),await e.findByRole("heading",{name:/spend by model/i}),await e.findByRole("heading",{name:/timing distribution/i}),await e.findByRole("heading",{name:/cache hit ratio by provider/i}),await e.findByRole("heading",{name:/agent cost breakdown/i}),await m(()=>{if(e.queryByText(/No spend data for the selected filters/i))throw new Error("Expected spend-over-time chart to render populated data");if(e.queryByText(/No project spend data yet/i))throw new Error("Expected spend-by-project chart to render populated data");if(e.queryByText(/No model spend data yet/i))throw new Error("Expected spend-by-model chart to render populated data");if(e.queryByText(/No timing data available yet/i))throw new Error("Expected timing distribution chart to render populated data");if(e.queryByText(/No provider cache hit data available/i))throw new Error("Expected provider cache-hit chart to render populated data");if(e.queryByText(/No agent-level spend data available/i))throw new Error("Expected agent-cost chart to render populated data")});const s=await g(t),r=()=>[...s.querySelectorAll(".recharts-legend-item-text")];await m(()=>{if(r().length<5)throw new Error("expected 5+ chart legend labels")}),await p(_(r).join(`
`)).toBe("")}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AnalyticsDashboardStory />,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = await findAnalyticsDialog(canvasElement);
    const analytics = within(dialog);
    await analytics.findByText("Total Spend");
    await analytics.findByRole("button", {
      name: "Local"
    });
    await analytics.findByRole("button", {
      name: "UTC"
    });
    await analytics.findByRole("button", {
      name: "7D"
    });
    await analytics.findByRole("button", {
      name: "All"
    });
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    // The test-runner plays at desktop size; only Pixel/manager pin the phone width.
    if (window.innerWidth < 768) {
      const rect = dialog.getBoundingClientRect();
      await expect(rect.left).toBe(0);
      await expect(rect.width).toBe(window.innerWidth);
      await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth);
      const header = analytics.getByTestId("analytics-header");
      await expect(header.scrollWidth).toBeLessThanOrEqual(header.clientWidth);
      const close = analytics.getByRole("button", {
        name: "Close analytics"
      });
      await expect(close.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
    }
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AnalyticsDashboardStory />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(await findAnalyticsDialog(canvasElement));
    await canvas.findByText("Total Spend");
    await canvas.findByText("$184.73");
    const localTimeButton = await canvas.findByRole("button", {
      name: "Local"
    });
    const utcButton = await canvas.findByRole("button", {
      name: "UTC"
    });
    if (localTimeButton.getAttribute("aria-pressed") !== "true") {
      await userEvent.click(localTimeButton);
      await waitFor(() => {
        if (localTimeButton.getAttribute("aria-pressed") !== "true") {
          throw new Error("Expected local timezone mode to become selected");
        }
      });
    }
    await userEvent.click(utcButton);
    await waitFor(() => {
      if (utcButton.getAttribute("aria-pressed") !== "true") {
        throw new Error("Expected UTC timezone mode to become selected");
      }
    });
    await canvas.findByRole("heading", {
      name: /spend over time/i
    });
    await canvas.findByRole("heading", {
      name: /spend by project/i
    });
    await canvas.findByRole("heading", {
      name: /spend by model/i
    });
    await canvas.findByRole("heading", {
      name: /timing distribution/i
    });
    await canvas.findByRole("heading", {
      name: /cache hit ratio by provider/i
    });
    await canvas.findByRole("heading", {
      name: /agent cost breakdown/i
    });
    await waitFor(() => {
      if (canvas.queryByText(/No spend data for the selected filters/i)) {
        throw new Error("Expected spend-over-time chart to render populated data");
      }
      if (canvas.queryByText(/No project spend data yet/i)) {
        throw new Error("Expected spend-by-project chart to render populated data");
      }
      if (canvas.queryByText(/No model spend data yet/i)) {
        throw new Error("Expected spend-by-model chart to render populated data");
      }
      if (canvas.queryByText(/No timing data available yet/i)) {
        throw new Error("Expected timing distribution chart to render populated data");
      }
      if (canvas.queryByText(/No provider cache hit data available/i)) {
        throw new Error("Expected provider cache-hit chart to render populated data");
      }
      if (canvas.queryByText(/No agent-level spend data available/i)) {
        throw new Error("Expected agent-cost chart to render populated data");
      }
    });

    // Recharts colors legend labels with their series color by default. Several series colors
    // were below WCAG AA as text, in every theme (#6885).
    const dialog = await findAnalyticsDialog(canvasElement);
    const legendLabels = () => [...dialog.querySelectorAll<HTMLElement>(".recharts-legend-item-text")];
    await waitFor(() => {
      if (legendLabels().length < 5) throw new Error("expected 5+ chart legend labels");
    });
    await expect(textsBelowAaInThemes(legendLabels).join("\\n")).toBe("");
  }
}`,...k.parameters?.docs?.source}}};const Ee=["StatsDashboardPhone","StatsDashboard"];export{k as StatsDashboard,h as StatsDashboardPhone,Ee as __namedExportsOrder,Pe as default};
