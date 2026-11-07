# Changelog
所有项目重要变更都会记录在此，版本号遵循语义化版本 SemVer：MAJOR.MINOR.PATCH
> 版本后缀说明：
> - full：完整版（包含联系方式、联系页面）
> - nocontact：纯净版（移除全部联系入口）

## [v1.0.0] - 2026-11-07
### ✨ 新增
- 增加构建环境变量控制开关 `NEXT_PUBLIC_SHOW_CONTACT` 
- 导航栏联系菜单、联系页面、底部联系方式相关 `/[lang]/contact` 支持构建时自动隐藏


### 📌 说明
- 环境变量 .env 相关文件 `NEXT_PUBLIC_SHOW_CONTACT = false`，默认关闭联系相关组件
- 记得cloudflare也要增加相关的环境变量

### ⚠️ 注意事项
- 环境变量两套同步维护：
  - `NEXT_PUBLIC_SHOW_CONTACT`：前端组件（导航、UI）读取
- 开发环境修改 env 后，必须重启 dev 服务，清除缓存

---

## [Unreleased] （下一次改动先写在这里，发布时再填版本号和日期）
### ✨ 新增
### 🐛 修复
### 🛠️ 调整