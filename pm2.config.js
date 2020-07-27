// 名称任意，按照个人习惯来
module.exports = {
  apps: [
    {
      name: 'templateServer', // 应用名称
      script: './start.js', // 启动文件地址
      cwd: './', // 当前工作路径
      watch: true, // 是否监听文件变动然后重启
      ignore_watch: [
        // 忽视这些目录的变化
        'node_modules',
        'logs',
        'public',
      ],
      exec_mode: 'cluster_mode', // 应用启动模式，支持fork和cluster模式
      instances: 4, // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      max_memory_restart: '500M', // 最大内存限制数，超出自动重启
      node_args: '--harmony', // node的启动模式
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};