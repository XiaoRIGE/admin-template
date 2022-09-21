<template>
  <div id="app">
    <editor
      v-model="richText"
      api-key="1xd2cy1luyrnzmq9pksd0wzrpicdftl7ipdvw6wmjfybd9zb"
      :init="initConfig"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { reactive, ref, watch } from 'vue'

export default {
  name: 'App',
  components: {
    editor: Editor,
  },
  setup() {
    // 文件选择回调
    const callBack = (callback, value, meta) => {
      // Provide file and text for the link dialog
      // 文件分类
      let filetype = '.pdf, .jpg, .jpeg, .png, .gif, .mp3, .mp4'
      // 后端接收上传文件的地址
      let uploadUrl = `www.upload.com/&upload_type=video`
      // 为不同插件指定文件类型及后端地址
      switch (meta.filetype) {
        case 'image':
          uploadUrl = `www.upload.com/&upload_type=image`
          filetype = '.jpg, .jpeg, .png, .gif'
          break
        case 'media':
          filetype = '.mp3, .mp4'
          break
        case 'file':
        default:
      }
      // 模拟出一个input用于添加本地文件
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', filetype)
      input.click()
      input.onchange = function () {
        const file = this.files[0]
        console.log('正在上传')
        // console.log(file, file.name);
        const xhr = new XMLHttpRequest()
        xhr.withCredentials = false
        xhr.open('POST', uploadUrl)
        xhr.onload = function () {
          if (xhr.status !== 200) {
            // loading.close()
            // failure('HTTP Error: ' + xhr.status);
            return
          }
          const json = JSON.parse(xhr.responseText)
          if (!json || typeof json.location !== 'string') {
            // failure('Invalid JSON: ' + xhr.responseText);
            return
          }
          // loading.close()
          // callback传入上传成功的视频链接，title传入文件名
          callback(encodeURI(json.location), {
            title: file.name,
          })
        }
        const formData = new FormData()
        formData.append('file', file, file.name)
        xhr.send(formData)
      }
    }
    // 视频文件回调
    const videoTemplateCallback = (data) =>
      `${
        `<video width="${data.width}" height="${data.height}"${
          data.poster ? ` poster="${data.poster}"` : ''
        } controls="controls">\n` +
        `<source src="${data.source}"${
          data.sourcemime ? ` type="${data.sourcemime}"` : ''
        } />\n`
      }${
        data.altsource
          ? `<source src="${data.altsource}"${
              data.altsourcemime ? ` type="${data.altsourcemime}"` : ''
            } />\n`
          : ''
      }</video>`

    const imageUploadHandler = (blobInfo, succFun, failFun) => {
      console.log('自定义图片上传逻辑')
      const file = blobInfo.blob() // 转化为易于理解的file对象
      const xhr = new XMLHttpRequest()
      xhr.withCredentials = false
      xhr.open('POST', '/demo/upimg.php')
      xhr.onload = function () {
        if (xhr.status !== 200) {
          failFun(`HTTP Error: ${xhr.status}`)
          return
        }
        const json = JSON.parse(xhr.responseText)
        if (!json || typeof json.location !== 'string') {
          failFun(`Invalid JSON: ${xhr.responseText}`)
          return
        }
        succFun(json.location)
      }
      const formData = new FormData()
      formData.append('file', file, file.name) // 此处与源文档不一样
      xhr.send(formData)
    }

    const previewCallback = (cb, value, meta) => {
      console.log('文件选择回调')
      console.log(cb, value, meta)
      // const input = document.createElement('input')
      // input.setAttribute('type', 'file')
      // input.setAttribute('accept', 'image/*')

      // input.addEventListener('change', (e) => {
      //   const file = e.target.files[0]

      //   const reader = new FileReader()
      //   reader.addEventListener('load', () => {
      //     /*
      //     Note: Now we need to register the blob in TinyMCEs image blob
      //     registry. In the next release this part hopefully won't be
      //     necessary, as we are looking to handle it internally.
      //   */
      //     const id = `blobid${new Date().getTime()}`
      //     const { blobCache } = tinymce.activeEditor.editorUpload
      //     const base64 = reader.result.split(',')[1]
      //     const blobInfo = blobCache.create(id, file, base64)
      //     blobCache.add(blobInfo)

      //     /* call the callback and populate the Title field with the file name */
      //     cb(blobInfo.blobUri(), { title: file.name })
      //   })
      //   reader.readAsDataURL(file)
      // })

      // input.click()
    }

    const initConfig = reactive({
      plugins:
        'lists link image table code help wordcount advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
      toolbar:
        'undo redo | blocks | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',

      language: 'zh_CN', // todo 语言包下载地址报404

      a11y_advanced_options: true,
      // 图片上传 视频上传参考 http://tinymce.ax-z.cn/general/upload-images.php
      images_upload_handler: imageUploadHandler,
      file_picker_callback: previewCallback,
      /* enable title field in the Image dialog */
      image_title: true,
      /* enable automatic uploads of images represented by blob or data URIs */
      automatic_uploads: false,

      // content_style:
      //   'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
      // block_unsupported_drop: false,
      file_picker_types: 'file image media', // 可选文件类型
      // images_file_types: 'image/*',

      // 视频上传
      // iframe_template_callback: (data) =>
      //   `<iframe title="${data.title}" width="${data.width}" height="${data.height}" src="${data.source}"></iframe>`,
      media_filter_html: false,
      video_template_callback: videoTemplateCallback,
    })

    const richText = ref('')
    watch(richText, () => {
      console.log('richText', richText.value)
    })

    return {
      richText,
      initConfig,
      callBack,
    }
  },
}
</script>
