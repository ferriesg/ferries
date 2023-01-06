module.exports = {
  // 收集测试覆盖率
  collectCoverage: true,

  // 一组glob模式，指示一组应为其收集覆盖率信息的文件。如果文件与指定的 glob 模式匹配，则即使该文件不存在测试，也将为其收集覆盖率信息，并且在测试套件中从不需要它。
  collectCoverageFrom: [
    "**/*.{js,jsx,css,ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/vendor/**",
  ],
  //块使用的文件扩展名数组，从左往右查找这些文件
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  //用于将模块路径映射到不同的模块
  moduleNameMapper: {
    include: ["components-ssr/**/*"],
  },
  // 测试覆盖率报告输出目录
  coverageDirectory: "coverage",
  // 覆盖率阈值，如果没有达到阈值则测试失败
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};
