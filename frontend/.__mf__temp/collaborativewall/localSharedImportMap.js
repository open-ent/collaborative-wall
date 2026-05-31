
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "@open-ent/react": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild___mf_0_open_mf_2_ent_mf_1_react__prebuild__.js")
          return pkg
        }
      ,
        "react-router-dom": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__react_mf_2_router_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "i18next": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__i18next__prebuild__.js")
          return pkg
        }
      ,
        "react-i18next": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__react_mf_2_i18next__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "@open-ent/client": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild___mf_0_open_mf_2_ent_mf_1_client__prebuild__.js")
          return pkg
        }
      ,
        "zustand": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__zustand__prebuild__.js")
          return pkg
        }
      ,
        "@react-spring/web": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild___mf_0_react_mf_2_spring_mf_1_web__prebuild__.js")
          return pkg
        }
      ,
        "react-hook-form": async () => {
          let pkg = await import("__mf__virtual/collaborativewall__prebuild__react_mf_2_hook_mf_2_form__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.3.1"
            }
          }
        ,
          "@open-ent/react": {
            name: "@open-ent/react",
            version: "2.5.22",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["@open-ent/react"].loaded = true
              const {"@open-ent/react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^2.5.22"
            }
          }
        ,
          "react-router-dom": {
            name: "react-router-dom",
            version: "6.30.3",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["react-router-dom"].loaded = true
              const {"react-router-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^6.30.3"
            }
          }
        ,
          "i18next": {
            name: "i18next",
            version: "23.8.1",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["i18next"].loaded = true
              const {"i18next": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^23.8.1"
            }
          }
        ,
          "react-i18next": {
            name: "react-i18next",
            version: "14.1.0",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["react-i18next"].loaded = true
              const {"react-i18next": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^14.1.0"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.3.1"
            }
          }
        ,
          "@open-ent/client": {
            name: "@open-ent/client",
            version: "2.5.22",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["@open-ent/client"].loaded = true
              const {"@open-ent/client": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^2.5.22"
            }
          }
        ,
          "zustand": {
            name: "zustand",
            version: "4.5.7",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["zustand"].loaded = true
              const {"zustand": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^4.5.7"
            }
          }
        ,
          "@react-spring/web": {
            name: "@react-spring/web",
            version: "9.7.5",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["@react-spring/web"].loaded = true
              const {"@react-spring/web": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^9.7.5"
            }
          }
        ,
          "react-hook-form": {
            name: "react-hook-form",
            version: "7.71.1",
            scope: ["default"],
            loaded: false,
            from: "collaborativewall",
            async get () {
              usedShared["react-hook-form"].loaded = true
              const {"react-hook-form": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^7.71.1"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      