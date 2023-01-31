## Form 文档 📚

### 1、Form 属性（FormProps）：

> 使用 `v-bind="$attrs"` 通过属性透传将 **ProTable** 组件属性全部透传到 **el-form** 上，所以我们支持 **el-form** 的所有 **Props** 属性。在此基础上，还扩展了以下 **Props：**

|    属性名    |                  默认值                   |    类型     | 是否必传 |               属性描述               |
| :----------: |:--------------------------------------:| :---------: | :------: |:--------------------------------:|
|   propsList    |                   —                    | FormSchema |    ✅    | Form 组件会根据此字段渲染表单，详情见 FormSchema |
|  formData  |                   —                    |  Object   |    ❌    |              表单绑定值               |
| isCol |                 false                  |  Boolean   |    ❌    |             使用Col布局              |
|    rowProps     |                   —                    |   RowTypes    |    ❌    |        ElementUI的row原生属性         |
|  colProps  |  {xs: 24,sm: 12,md: 12,lg: 12,xl: 12}  |   ColProps   |    ❌    |        ElementUI的col原生属性         |
