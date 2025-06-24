(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/utils/supabaseClient.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// utils/supabaseClient.ts
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = 'https://cyhfugcwkgzcceadtzfw.supabase.co'; // coloque a sua url
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5aGZ1Z2N3a2d6Y2NlYWR0emZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNDcyNzIsImV4cCI6MjA2MzkyMzI3Mn0.nxtN0yKyarDzGD991tcGC3DQnVt2GFxeLCzAPmJyYn8'; // coloque sua anon key
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/pages/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Login)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Login() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [senha, setSenha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [erro, setErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSenha, setShowSenha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Mapeia mensagens de erro do Supabase para português
    function getErrorMessage(error) {
        if (!error) return '';
        const msg = error.message?.toLowerCase() || '';
        if (msg.includes('email not confirmed')) return 'Seu e-mail ainda não foi confirmado! Verifique sua caixa de entrada.';
        if (msg.includes('invalid login')) return 'E-mail ou senha inválidos!';
        if (msg.includes('user not found')) return 'Usuário não encontrado!';
        if (msg.includes('network error')) return 'Erro de conexão. Tente novamente.';
        return error.message || 'Erro ao tentar fazer login. Tente novamente.';
    }
    async function handleLogin(e) {
        e.preventDefault();
        setErro('');
        setLoading(true);
        // Validação rápida
        if (!email || !senha) {
            setErro('Preencha todos os campos.');
            setLoading(false);
            return;
        }
        // Login Supabase Auth
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password: senha
        });
        if (error || !data.user) {
            setErro(getErrorMessage(error));
            setLoading(false);
            return;
        }
        // Confere pagamento confirmado
        const { data: userData, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('usuarios').select('pagamento_confirmado').eq('id', data.user.id).single();
        if (userError) {
            setErro('Erro ao verificar status do pagamento.');
            setLoading(false);
            return;
        }
        if (!userData?.pagamento_confirmado) {
            setErro('Seu pagamento ainda não foi confirmado. Complete o pagamento para acessar o painel.');
            setLoading(false);
            return;
        }
        router.push('/pages/painel');
    }
    // Suporte a tecla Enter
    function handleKeyDown(e) {
        if (e.key === 'Enter') handleLogin(e);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-b94202abf4f33663" + " " + "flex min-h-screen bg-gradient-to-br from-blue-700 to-blue-400 items-center justify-center animate-fadein",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b94202abf4f33663" + " " + "bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo-bgsolutions.png",
                        alt: "BG Solutions",
                        className: "jsx-b94202abf4f33663" + " " + "mb-4 w-20 h-20 rounded-full shadow-lg border-2 border-blue-100"
                    }, void 0, false, {
                        fileName: "[project]/app/pages/login/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-b94202abf4f33663" + " " + "text-2xl font-bold text-blue-700 mb-1 tracking-tight",
                        children: "Área do Cliente"
                    }, void 0, false, {
                        fileName: "[project]/app/pages/login/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-b94202abf4f33663" + " " + "text-gray-600 mb-8 text-center",
                        children: "Acesse seu painel exclusivo de automação WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/app/pages/login/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        autoComplete: "on",
                        className: "jsx-b94202abf4f33663" + " " + "w-full flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b94202abf4f33663",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Seu e-mail",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    autoFocus: true,
                                    required: true,
                                    autoComplete: "username",
                                    onKeyDown: handleKeyDown,
                                    className: "jsx-b94202abf4f33663" + " " + "border w-full p-3 rounded-lg focus:outline-none focus:border-blue-700 transition shadow-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/login/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pages/login/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b94202abf4f33663" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: showSenha ? "text" : "password",
                                        placeholder: "Sua senha",
                                        value: senha,
                                        onChange: (e)=>setSenha(e.target.value),
                                        required: true,
                                        autoComplete: "current-password",
                                        onKeyDown: handleKeyDown,
                                        className: "jsx-b94202abf4f33663" + " " + "border w-full p-3 rounded-lg focus:outline-none focus:border-blue-700 transition shadow-sm pr-12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/login/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": showSenha ? "Ocultar senha" : "Mostrar senha",
                                        tabIndex: -1,
                                        onClick: ()=>setShowSenha((s)=>!s),
                                        className: "jsx-b94202abf4f33663" + " " + "absolute right-4 top-3 text-gray-400 hover:text-blue-700",
                                        children: showSenha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 22,
                                            height: 22,
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-b94202abf4f33663",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b94202abf4f33663"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/login/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 77
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "3",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b94202abf4f33663"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/login/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 171
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/login/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 22,
                                            height: 22,
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-b94202abf4f33663",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 1l22 22M17.94 17.94C16.09 19.27 14.12 20 12 20c-7 0-11-8-11-8a21.74 21.74 0 0 1 5.18-6.37M8.46 8.46A3 3 0 0 0 12 15a3 3 0 0 0 3-3",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b94202abf4f33663"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/login/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 77
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 5c2.11 0 4.08.73 5.93 2.07A21.72 21.72 0 0 1 23 12a21.82 21.82 0 0 1-3.07 4.93",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-b94202abf4f33663"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/login/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 259
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/login/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/login/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/login/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b94202abf4f33663" + " " + "text-red-600 text-sm py-2 bg-red-50 rounded border border-red-200 text-center animate-shake",
                                children: erro
                            }, void 0, false, {
                                fileName: "[project]/app/pages/login/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "jsx-b94202abf4f33663" + " " + `bg-blue-700 text-white font-bold py-3 rounded-lg mt-2 hover:bg-blue-800 transition flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`,
                                children: [
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "jsx-b94202abf4f33663" + " " + "animate-spin h-5 w-5 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "white",
                                                strokeWidth: "4",
                                                fill: "none",
                                                className: "jsx-b94202abf4f33663" + " " + "opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/login/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8v4l3-3-3-3v4A8 8 0 104 12z",
                                                className: "jsx-b94202abf4f33663" + " " + "opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/login/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/login/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    loading ? 'Entrando...' : 'Entrar'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/login/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/login/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "jsx-b94202abf4f33663" + " " + "text-blue-500 mt-6 hover:underline text-sm",
                        children: "Voltar para o site"
                    }, void 0, false, {
                        fileName: "[project]/app/pages/login/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-b94202abf4f33663" + " " + "mt-4 text-gray-400 text-xs text-center",
                        children: "© 2025 BG Solutions"
                    }, void 0, false, {
                        fileName: "[project]/app/pages/login/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/login/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b94202abf4f33663",
                children: "@keyframes fadein{0%{opacity:0}to{opacity:1}}.animate-fadein{animation:.7s fadein}@keyframes shake{0%{transform:translate(0)}20%{transform:translate(-6px)}40%{transform:translate(6px)}60%{transform:translate(-6px)}80%{transform:translate(6px)}to{transform:translate(0)}}.animate-shake{animation:.35s shake}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pages/login/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(Login, "yDuMCZ3G0DIA7XPFaX+tykuCljQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_fe8b0713._.js.map