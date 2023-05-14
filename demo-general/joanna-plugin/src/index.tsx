import * as React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import Icon from './icon';

const LowcodePluginJoannaPlugin = (ctx: IPublicModelPluginContext, options: any) => {
  return {
    // 插件的初始化函数，在引擎初始化之后会立刻调用
    init() {
      // 你可以拿到插件注册时的初始化参数
      // console.log(options.name);

      // 往引擎增加面板
      ctx.skeleton.add({
        area: 'leftArea',
        name: 'LowcodePluginJoannaPluginPane',
        type: 'PanelDock',
        props: {
          icon: <Icon />,
          description: 'Demo',
        },
        content: <div>这是一个 Demo 面板-joanna</div>,
      });

      ctx.logger.log('打个日志');
    },
  };
};

// 插件名，注册环境下唯一
LowcodePluginJoannaPlugin.pluginName = 'LowcodePluginJoannaPlugin';
LowcodePluginJoannaPlugin.meta = {
  // 依赖的插件（插件名数组）
  dependencies: [],
  engines: {
    lowcodeEngine: '^1.1.0', // 插件需要配合 ^1.1.0 的引擎才可运行
  },
}

export default LowcodePluginJoannaPlugin;
