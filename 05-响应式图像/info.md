# 主要注意一些图片的压缩
## svg的优点
## canvas的优点
## 可以通过媒体查询适配高dpi显示器
` @media screen (-webkit-min-device-pixel-ratio:2),
                (min-resolution: 192dpi){
                    /* 在此处放置高dpi样式 */
                }
 `
## 使用srcset
### 响应式图像方法之一，是在<img>中使用名为srcset的HTML5特性。 注意srcset不是替换src而是补充src
## 使用<picture> 元素
### srcset只能满足等宽高比裁剪 不能提供不同的裁剪和焦点的实现
`<picture>
    <source media="min-width: 704px"
        srcset="img/xxxx/sxasx/s.png 384w"
        size="33.3vw"
    >
    <source media="min-width: 804px"
        srcset="img/xxxx/sxasx/s.png 300w"
        size="38.3vw"
    >
    <source media="min-width: 894px"
        srcset="img/xxxx/sxasx/s.png 500w"
        size="35.3vw"
    >
    </source>
</picture>`