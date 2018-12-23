const app = getApp()

Page({
  onLoad() {
    　　this.ctx = wx.createCameraContext()
  },

  takePhoto() {
    this.ctx.takePhoto({
      quality: 'low',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })   
         wx.uploadFile({
          url: 'http://127.0.0.1:80', //换成自己的接口地址
          filePath: res.tempImagePath,
          name: 'image',
          header: { "Content-Type": "multipart/form-data" },
          //  success: (res) => {
          //    var data = res.data
          //    console.log(res)
          //    wx.hideLoading();
          //    this.setData({ logindisabled: false });

          success: function (res) {
            console.log(res)
            var data = res.data
            var data2 = res.errMsg
            //console.log("data==" + data)
            //console("data=="+data1)
            // console.log(data.__proto__)

            if (data2 != "uploadFile:ok") {
              //识别失败，提示上传质量更好的图片
              wx.showModal({
                title: '提示',
                content: '识别失败，请上传质量更好的图片',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            } else {
              //识别成功，拼接识别结果并显示
            console.log("ok")
            wx.request({
              url: "http://api.heclouds.com/devices/503081513/datapoints?type=3",
              header: {
                "Content-Type": "application/json",
                "api-key": "Yz7rQac0roosEv6ROSYOnviGRzk="
              },
              method: "post",
data:{"123":1,}
            })
            }


          }
        })
      }
    })
  },

  //上传图片至服务器并接受返回的结果
  // identifyimage: function () {
  //   var that = this;
  //   wx.uploadFile({
  //     url: 'http://127.0.0.1:8000', //换成自己的接口地址
  //     filePath: res.tempImagePath[0],
  //     name: 'image',
  //     header: { "Content-Type": "multipart/form-data" },
  //     success: function (res) {
  //       console.log(res)
  //       var data = JSON.parse(res.data) //把返回结果解析成json格式
  //       //console.log(data)

  //       if (data.data.errormsg != "OK") {
  //         //识别失败，提示上传质量更好的图片
  //         wx.showModal({
  //           title: '提示',
  //           content: '识别失败，请上传质量更好的图片',
  //           success: function (res) {
  //             if (res.confirm) {
  //               console.log('用户点击确定')
  //             } else if (res.cancel) {
  //               console.log('用户点击取消')
  //             }
  //           }
  //         })
  //       } else {
  //         //识别成功，拼接识别结果并显示
  //         var list = data.data.items
  //         var str = ""
  //         for (var i = 0; i < list.length; i++) {
  //           str += list[i].itemstring + " "
  //         }
  //         that.setData({
  //           motto: str
  //         })
  //       }


  //     }
  //   })
  // },

  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
