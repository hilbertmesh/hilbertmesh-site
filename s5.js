<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
<title>HILBERT // S5 OPERATOR TERMINAL</title>
<style>
:root{
  --bg:#020802; --fg:#00ff41; --fg2:#9dffad; --dim:#4f8f5a;
  --bd:#00aa33; --amber:#ffaa00; --amber2:#ffd58f; --err:#ff5555;
  --panel:rgba(0,18,4,.92);
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{min-height:100vh;background:var(--bg);color:var(--fg);font-family:'Share Tech Mono',ui-monospace,monospace;overflow-x:hidden;-webkit-text-size-adjust:100%}
body:before{content:"";position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent 0 2px,rgba(0,255,65,.035) 3px),radial-gradient(circle at center,rgba(0,255,65,.12),transparent 55%);pointer-events:none;z-index:0}
.wrap{position:relative;z-index:1;max-width:980px;margin:0 auto;padding:14px}
.bar{display:flex;justify-content:space-between;align-items:center;font-size:11px;letter-spacing:2px;color:var(--amber);padding:6px 0;border-bottom:1px solid var(--bd);margin-bottom:14px}
.bar .l{color:var(--amber)}
.bar .r{color:var(--dim);font-size:10px}
.panel{border:1px solid var(--bd);background:var(--panel);box-shadow:0 0 22px rgba(0,255,65,.08);padding:16px;margin-bottom:14px}
.panel.amber{border-color:var(--amber);box-shadow:0 0 22px rgba(255,170,0,.1)}
h1{font-size:clamp(18px,4.5vw,24px);letter-spacing:3px;margin:0 0 6px;text-shadow:0 0 12px rgba(0,255,65,.45)}
h2{font-size:13px;letter-spacing:2px;color:var(--amber);margin:0 0 10px}
.sub{color:var(--dim);font-size:11px;letter-spacing:1px;margin-bottom:10px}
.row{display:flex;flex-wrap:wrap;gap:14px;font-size:13px;margin:6px 0}
.row b{color:var(--amber);letter-spacing:2px;margin-right:6px}
.input,textarea{width:100%;padding:12px;background:#001500;border:1px solid var(--bd);color:var(--fg);font-family:inherit;font-size:14px;letter-spacing:2px;margin:6px 0;line-height:1.5}
textarea{letter-spacing:.5px;min-height:140px;resize:vertical}
.input:focus,textarea:focus{outline:1px solid var(--amber)}
label{display:block;font-size:11px;letter-spacing:2px;color:var(--amber);margin-top:8px}
.btn{display:inline-block;margin:6px 6px 0 0;color:var(--fg);background:#001500;border:1px solid var(--bd);padding:12px 16px;text-decoration:none;letter-spacing:2px;font-family:inherit;cursor:pointer;font-size:13px;min-height:44px}
.btn:hover{background:rgba(0,255,65,.08)}
.btn:disabled{opacity:.45;cursor:not-allowed}
.btn.amber{color:var(--amber);border-color:var(--amber)}
.btn.danger{color:#ff8a8a;border-color:#7a1d1d}
.statusline{font-size:14px;letter-spacing:3px;padding:10px 12px;border:1px solid var(--bd);background:rgba(0,0,0,.35);margin:6px 0}
.statusline.amber{border-color:var(--amber);color:var(--amber)}
.statusline.dev{border-color:#00cccc;color:#00cccc}
.kvgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;margin-top:8px}
.kvgrid .k{color:var(--amber);letter-spacing:2px}
.kvgrid .v{color:var(--fg2)}
pre{white-space:pre-wrap;color:var(--fg2);border:1px solid rgba(0,170,51,.45);padding:12px;background:rgba(0,0,0,.4);max-height:50vh;overflow:auto;font-size:12px;word-break:break-word;margin:8px 0}
.warn{color:var(--amber);font-size:12px;line-height:1.6;margin-top:8px}
.err{color:var(--err);font-size:12px;line-height:1.6;margin-top:8px}
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
.tabs .btn{flex:1;min-width:120px;text-align:center}
.hidden{display:none !important}
.packs{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:6px}
.pack{border:1px solid var(--bd);padding:12px;background:rgba(0,0,0,.3)}
.pack .nm{color:var(--amber);letter-spacing:2px;font-size:12px}
.pack .am{font-size:18px;color:var(--fg);margin:6px 0}
.pack .pr{color:var(--fg2);font-size:13px}
.pack .disc{color:var(--amber2);font-size:11px;margin-top:4px}
.scan{height:4px;background:linear-gradient(90deg,transparent,var(--fg),transparent);animation:scan 2.4s infinite;margin:10px 0;overflow:hidden}
@keyframes scan{from{transform:translateX(-100%)}to{transform:translateX(100%)}}
.foot{color:var(--dim);font-size:10px;letter-spacing:1px;margin-top:18px;text-align:center;line-height:1.7}
@media (max-width:520px){
  .kvgrid{grid-template-columns:1fr}
  .packs{grid-template-columns:1fr 1fr}
}
</style>
</head>
<body>
<div class="wrap">
  <div class="bar">
    <div class="l">CI-Ω7 // S5 OPERATOR TERMINAL</div>
    <div class="r" id="netStatus">EGRESS: S5 ONLINE</div>
  </div>

  <!-- LOGIN PANEL -->
  <div class="panel" id="loginPanel">
    <h1>S5 ACCESS</h1>
    <div class="sub">OPERATOR CREDENTIAL REQUIRED</div>

    <label>S5 OPERATOR CREDENTIAL</label>
    <input class="input" id="codeInput" maxlength="48" placeholder="S5-XXXX-XXXX-XXXX-XXXX-XXXX" autocomplete="off" spellcheck="false">
    <button class="btn amber" id="loginBtn">▸ AUTHENTICATE</button>
    <a class="btn" href="/">RETURN TO NODE</a>

    <div class="warn">
      Your S5 code is your operator credential. Store it securely.<br>
      If lost, manual operator verification is required.<br>
      Recovery channel: <span style="color:var(--amber2)">support@hilbertmesh.com</span>
    </div>
    <div class="err hidden" id="loginErr"></div>
  </div>

  <!-- TERMINAL PANEL -->
  <div class="panel hidden" id="termPanel">
    <div class="statusline" id="statusLine">STATUS: CIVILIAN</div>
    <div class="kvgrid">
      <div class="k">OPERATOR</div><div class="v" id="kUser">—</div>
      <div class="k">Σ BALANCE</div><div class="v" id="kSigma">—</div>
      <div class="k">CLEARANCE</div><div class="v" id="kClear">—</div>
      <div class="k">DISCOUNT</div><div class="v" id="kDisc">—</div>
    </div>

    <div class="tabs" style="margin-top:14px">
      <button class="btn amber" data-tab="forge">▸ FORGE</button>
      <button class="btn" data-tab="charge">▸ SIGMA CHARGE</button>
      <button class="btn" data-tab="upgrade">▸ CLEARANCE UPGRADE</button>
      <button class="btn" data-tab="account">▸ OPERATOR</button>
    </div>

    <!-- FORGE TAB -->
    <div id="tab-forge" class="tabbody">
      <h2>DOSSIER FORGE</h2>
      <div class="sub">1 Σ per run · paste-only seed · server-side execution</div>

      <label>MODE</label>
      <select class="input" id="fMode">
        <option value="paid_test">paid_test (default)</option>
        <option value="hilbert">hilbert (mesh)</option>
        <option value="intelligence">intelligence (clean)</option>
        <option value="intel-clean">intel-clean</option>
      </select>

      <label>PAGES (1–25)</label>
      <input class="input" id="fPages" type="number" min="1" max="25" value="1">

      <label>SEED — PASTE TEXT ONLY (no file uploads)</label>
      <textarea id="fSeed" maxlength="3000" placeholder="Paste seed text here. 3000 char max."></textarea>

      <button class="btn amber" id="runBtn">▸ RUN FORGE  (1 Σ)</button>
      <button class="btn" id="clearOut">CLEAR OUTPUT</button>
      <div class="scan hidden" id="forgeScan"></div>
      <pre id="forgeOut">FORGE STANDING BY.</pre>
    </div>

    <!-- SIGMA CHARGE TAB -->
    <div id="tab-charge" class="tabbody hidden">
      <h2>SIGMA CHARGE</h2>
      <div class="sub">Add Σ to your operator wallet. Member discount applied at checkout.</div>
      <div class="packs">
        <div class="pack">
          <div class="nm">SMALL</div><div class="am">5 Σ</div><div class="pr">$5.00</div>
          <button class="btn amber" data-pack="small" style="width:100%;margin-top:8px">BUY 5 Σ</button>
        </div>
        <div class="pack">
          <div class="nm">MEDIUM</div><div class="am">12 Σ</div><div class="pr">$10.00</div>
          <div class="disc">~17% volume</div>
          <button class="btn amber" data-pack="medium" style="width:100%;margin-top:8px">BUY 12 Σ</button>
        </div>
        <div class="pack">
          <div class="nm">LARGE</div><div class="am">30 Σ</div><div class="pr">$22.00</div>
          <div class="disc">~27% volume</div>
          <button class="btn amber" data-pack="large" style="width:100%;margin-top:8px">BUY 30 Σ</button>
        </div>
        <div class="pack">
          <div class="nm">BULK</div><div class="am">75 Σ</div><div class="pr">$50.00</div>
          <div class="disc">~33% volume</div>
          <button class="btn amber" data-pack="bulk" style="width:100%;margin-top:8px">BUY 75 Σ</button>
        </div>
      </div>
      <div class="warn">Frontend Σ counts are cosmetic. Server is ground truth.</div>
    </div>

    <!-- UPGRADE TAB -->
    <div id="tab-upgrade" class="tabbody hidden">
      <h2>CLEARANCE UPGRADE</h2>
      <div class="sub">Monthly clearance grants Σ on schedule and applies a discount on Σ packs.</div>

      <div class="packs">
        <div class="pack">
          <div class="nm">AGENT RELAY</div>
          <div class="am">20 Σ / month</div>
          <div class="pr">$20.00 / month</div>
          <div class="disc">33% off Σ packs</div>
          <button class="btn amber" id="upAgent" style="width:100%;margin-top:8px">▸ BECOME AGENT</button>
        </div>
        <div class="pack">
          <div class="nm">SENIOR AGENT RELAY</div>
          <div class="am">75 Σ / month</div>
          <div class="pr">$50.00 / month</div>
          <div class="disc">50% off Σ packs · upgraded emblem</div>
          <button class="btn amber" id="upSenior" style="width:100%;margin-top:8px">▸ BECOME SENIOR AGENT</button>
        </div>
      </div>
      <div class="warn">Subscriptions auto-renew monthly. Cancellation downgrades you to CIVILIAN at period end.</div>
    </div>

    <!-- OPERATOR TAB -->
    <div id="tab-account" class="tabbody hidden">
      <h2>OPERATOR RECORD</h2>
      <div class="sub">Identity is bound to your S5 code. No email, no password.</div>
      <div class="kvgrid">
        <div class="k">USERNAME</div><div class="v" id="aUser">—</div>
        <div class="k">CLEARANCE</div><div class="v" id="aClear">—</div>
        <div class="k">Σ BALANCE</div><div class="v" id="aSigma">—</div>
        <div class="k">MONTHLY TIER</div><div class="v" id="aTier">—</div>
        <div class="k">DISCOUNT</div><div class="v" id="aDisc">—</div>
        <div class="k">EMBLEM RANK</div><div class="v" id="aEmblem">—</div>
      </div>
      <div style="margin-top:14px">
        <button class="btn" id="refreshBtn">▸ REFRESH RECORD</button>
        <button class="btn" id="forgetBtn">FORGET LOCAL CODE</button>
        <button class="btn danger" id="logoutBtn">LOG OUT</button>
      </div>
      <div class="warn">
        FORGET LOCAL CODE clears the cached credential from this device. Your operator record on the server is unchanged. To return, re-enter your S5 code.
      </div>
    </div>
  </div>

  <div class="foot">
    HILBERT MESH // S5 OPERATOR TERMINAL // Σ-AMBER ENFORCED<br>
    Recovery channel: support@hilbertmesh.com
  </div>
</div>
<script>
const $ = (id) => document.getElementById(id);

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>]/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  })[c]);
}

function clean(v, fb, n) {
  if (typeof v !== "string") return fb;
  return v.slice(0, n).replace(/[<>]/g, "").trim();
}

async function postJson(url, payload) {
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload || {})
    });

    const text = await r.text();
    let d;

    try {
      d = text ? JSON.parse(text) : {};
    } catch {
      return {
        ok: false,
        error: "invalid_json_response",
        httpStatus: r.status,
        responseText: text.slice(0, 300)
      };
    }

    if (!r.ok) {
      d.ok = false;
      d.httpStatus = r.status;
    }

    return d;
  } catch (e) {
    return {
      ok: false,
      error: "network_error",
      detail: e?.message || ""
    };
  }
}

async function getJson(url) {
  try {
    const r = await fetch(url, {
      method: "GET",
      credentials: "include",
      cache: "no-store"
    });

    const text = await r.text();
    let d;

    try {
      d = text ? JSON.parse(text) : {};
    } catch {
      return {
        ok: false,
        error: "invalid_json_response",
        httpStatus: r.status,
        responseText: text.slice(0, 300)
      };
    }

    if (!r.ok) {
      d.ok = false;
      d.httpStatus = r.status;
    }

    return d;
  } catch (e) {
    return {
      ok: false,
      error: "network_error",
      detail: e?.message || ""
    };
  }
}

function fmtErr(r) {
  if (!r) return "UNKNOWN ERROR";
  if (r.error === "invalid_json_response") {
    return "INVALID JSON RESPONSE // BACKEND RETURNED HTML OR WRONG ROUTE";
  }
  return String(r.error || "unknown_error").toUpperCase().replace(/_/g, " ");
}

const LS_CODE = "hmf_s5_code";
const LS_SESSION = "hmf_s5_session";

function saveLocal(code, sessionId) {
  try {
    if (code) localStorage.setItem(LS_CODE, code);
    if (sessionId) localStorage.setItem(LS_SESSION, sessionId);
  } catch {}
}

function loadLocal() {
  try {
    return {
      code: localStorage.getItem(LS_CODE) || "",
      sessionId: localStorage.getItem(LS_SESSION) || ""
    };
  } catch {
    return { code: "", sessionId: "" };
  }
}

function clearLocal() {
  try {
    localStorage.removeItem(LS_CODE);
    localStorage.removeItem(LS_SESSION);
  } catch {}
}

let state = {
  authenticated: false,
  s5SessionId: "",
  code: "",
  user: null
};

function statusLineFor(user) {
  if (!user) return { label: "STATUS: CIVILIAN", cls: "" };

  if (user.isDev || String(user.clearance || "").toUpperCase() === "THE GUY") {
    return { label: "STATUS: THE GUY", cls: "dev" };
  }

  const c = String(user.clearance || "CIVILIAN").toUpperCase();

  if (c === "DEV OVERRIDE") return { label: "STATUS: THE GUY", cls: "dev" };
  if (c === "SENIOR AGENT") return { label: "STATUS: SENIOR AGENT", cls: "amber" };
  if (c === "AGENT") return { label: "STATUS: AGENT", cls: "amber" };

  return { label: "STATUS: CIVILIAN", cls: "" };
}

function sigmaText(user) {
  if (!user) return "Σ 0";
  if (user.isDev || user.sigmaDisplay === "INFINITY") return "Σ ∞";
  return "Σ " + Number(user.sigma || 0);
}

function renderUser() {
  const u = state.user || {};
  const s = statusLineFor(u);
  const sl = $("statusLine");

  sl.textContent = s.label;
  sl.classList.remove("amber", "dev");
  if (s.cls) sl.classList.add(s.cls);

  const dr = Number(u.discountRate || 0);

  $("kUser").textContent = u.username || "OPERATOR";
  $("kSigma").textContent = sigmaText(u);
  $("kClear").textContent = u.clearance || "CIVILIAN";
  $("kDisc").textContent = dr > 0 ? Math.round(dr * 100) + "%" : "—";

  $("aUser").textContent = u.username || "OPERATOR";
  $("aClear").textContent = u.clearance || "CIVILIAN";
  $("aSigma").textContent = sigmaText(u);
  $("aTier").textContent = u.monthlyTier || "—";
  $("aDisc").textContent = dr > 0 ? Math.round(dr * 100) + "% off Σ packs" : "—";
  $("aEmblem").textContent = String(u.emblemRank || 0);
}

function showTerminal() {
  $("loginPanel").classList.add("hidden");
  $("termPanel").classList.remove("hidden");
  renderUser();
}

function showLogin() {
  $("termPanel").classList.add("hidden");
  $("loginPanel").classList.remove("hidden");
}

async function authenticate(rawCode) {
  $("loginErr").classList.add("hidden");
  $("loginErr").textContent = "";

  const r = await postJson("/api/verify-s5-code", { code: rawCode });

  if (!r.ok) {
    let msg = fmtErr(r);

    if (r.error === "access_locked_retry_later") {
      msg = "ACCESS LOCKED // RETRY LATER";
    }

    if (r.error === "invalid_json_response" && r.responseText) {
      msg += "\n\nFIRST RESPONSE BYTES:\n" + r.responseText;
    }

    $("loginErr").textContent = msg;
    $("loginErr").classList.remove("hidden");
    return false;
  }

  state.authenticated = true;
  state.s5SessionId = r.sessionId || "";
  state.code = rawCode;
  state.user = r.user || null;

  saveLocal(rawCode, state.s5SessionId);
  showTerminal();
  return true;
}

async function verifySession() {
  const r = await getJson("/api/verify-session");

  if (r.ok && r.user) {
    state.authenticated = true;
    state.s5SessionId = r.sessionId || state.s5SessionId || "";
    state.user = r.user;
    renderUser();
    showTerminal();
    return true;
  }

  return false;
}

async function refreshUser() {
  const ok = await verifySession();
  if (ok) return;

  if (state.code) {
    await authenticate(state.code);
    return;
  }

  clearLocal();
  state = { authenticated: false, s5SessionId: "", code: "", user: null };
  showLogin();
}

function authBody(extra) {
  return Object.assign({}, extra || {}, {
    s5SessionId: state.s5SessionId || undefined,
    s5Code: state.code || undefined
  });
}

function selectTab(name) {
  document.querySelectorAll(".tabbody").forEach(el => el.classList.add("hidden"));
  $("tab-" + name).classList.remove("hidden");

  document.querySelectorAll(".tabs .btn").forEach(b => {
    b.classList.toggle("amber", b.dataset.tab === name);
  });
}

document.querySelectorAll(".tabs .btn").forEach(b => {
  b.onclick = () => selectTab(b.dataset.tab);
});

let running = false;

$("runBtn").onclick = async () => {
  if (running) return;

  running = true;
  $("runBtn").disabled = true;
  $("forgeScan").classList.remove("hidden");

  const mode = clean($("fMode").value || "paid_test", "paid_test", 64);
  const pages = Math.max(1, Math.min(25, Number($("fPages").value) || 1));
  const seed = clean($("fSeed").value, "", 3000);

  if (!seed || seed.length < 3) {
    $("forgeOut").textContent = "SEED REQUIRED (paste text into the seed field).";
    $("runBtn").disabled = false;
    running = false;
    $("forgeScan").classList.add("hidden");
    return;
  }

  $("forgeOut").textContent = "BUFFERING...\nRUNNING S5 EXECUTION LAYER...";

  let r = await postJson("/api/forge", authBody({ mode, pages, seed }));

  if (!r.ok && (r.error === "invalid_s5_code" || r.httpStatus === 401) && state.code) {
    r = await postJson("/api/forge", {
      s5Code: state.code,
      mode,
      pages,
      seed
    });
  }

  if (r.ok) {
    const data = r.data || {};
    const body = typeof data.output === "string" ? data.output : JSON.stringify(data, null, 2);

    const meta =
      "PATH: " + (r.path || "?") +
      (r.sigmaDisplay === "INFINITY" ? " · Σ AFTER: ∞" : "") +
      (r.sigma != null ? " · Σ AFTER: " + r.sigma : "") +
      (r.clearance ? " · " + r.clearance : "");

    $("forgeOut").textContent =
      "FORGE AUTHORIZED // OUTPUT RECEIVED\n" +
      meta +
      "\n\n" +
      body;

    if (r.sigma != null || r.sigmaDisplay === "INFINITY") {
      state.user = Object.assign({}, state.user || {}, {
        sigma: r.sigma,
        sigmaDisplay: r.sigmaDisplay
      });
      renderUser();
    } else {
      refreshUser();
    }
  } else if (r.error === "insufficient_sigma") {
    $("forgeOut").textContent =
      "INSUFFICIENT Σ.\n\nAdd Σ via the SIGMA CHARGE tab to continue forge runs.";
    selectTab("charge");
  } else {
    $("forgeOut").textContent = "FORGE ERROR:\n\n" + JSON.stringify(r, null, 2);
  }

  $("runBtn").disabled = false;
  running = false;
  $("forgeScan").classList.add("hidden");
};

$("clearOut").onclick = () => {
  $("forgeOut").textContent = "FORGE STANDING BY.";
};

document.querySelectorAll("[data-pack]").forEach(b => {
  b.onclick = async () => {
    b.disabled = true;

    const r = await postJson("/api/create-checkout-session", authBody({
      productType: "sigma_pack",
      pack: b.dataset.pack
    }));

    b.disabled = false;

    if (r.ok && r.url) {
      location.href = r.url;
      return;
    }

    alert("CHECKOUT FAILED: " + fmtErr(r));
  };
});

$("upAgent").onclick = async () => {
  $("upAgent").disabled = true;

  const r = await postJson("/api/create-checkout-session", authBody({
    productType: "membership_agent"
  }));

  $("upAgent").disabled = false;

  if (r.ok && r.url) {
    location.href = r.url;
    return;
  }

  alert("CHECKOUT FAILED: " + fmtErr(r));
};

$("upSenior").onclick = async () => {
  $("upSenior").disabled = true;

  const r = await postJson("/api/create-checkout-session", authBody({
    productType: "membership_senior_agent"
  }));

  $("upSenior").disabled = false;

  if (r.ok && r.url) {
    location.href = r.url;
    return;
  }

  alert("CHECKOUT FAILED: " + fmtErr(r));
};

$("refreshBtn").onclick = () => refreshUser();

$("forgetBtn").onclick = () => {
  clearLocal();
  state = { authenticated: false, s5SessionId: "", code: "", user: null };
  showLogin();
};

$("logoutBtn").onclick = async () => {
  try {
    await postJson("/api/logout-s5-code", { sessionId: state.s5SessionId });
  } catch {}

  clearLocal();
  state = { authenticated: false, s5SessionId: "", code: "", user: null };
  showLogin();
};

$("loginBtn").onclick = async () => {
  const raw = clean($("codeInput").value, "", 80);

  if (!raw) {
    $("loginErr").textContent = "ENTER YOUR S5 OPERATOR CREDENTIAL";
    $("loginErr").classList.remove("hidden");
    return;
  }

  $("loginBtn").disabled = true;
  await authenticate(raw);
  $("loginBtn").disabled = false;
};

$("codeInput").addEventListener("keydown", e => {
  if (e.key === "Enter") $("loginBtn").click();
});

(async function init() {
  const local = loadLocal();

  state.code = local.code || "";
  state.s5SessionId = local.sessionId || "";

  if (local.code) {
    $("codeInput").value = local.code;
  }

  const hasSession = await verifySession();
  if (hasSession) return;

  showLogin();
})();
</script>
</body>
</html>
