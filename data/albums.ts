// 🛡️ 本文件由 XingHuiSama 控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "cover": "https://upload-bbs.miyoushe.com/upload/2026/08/20/327920966/181cd54ff58f0231bd758d4d20ed55ba_1867678749994688504.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg",
    "id": "album_1787250263038",
    "photos": [],
    "date": "2026-08-20"
  },
  {
    "cover": "https://upload-bbs.miyoushe.com/upload/2025/07/04/291110358/fc5bd69d0186169a7f8a576557e52981_1867527063979254496.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png",
    "id": "album_1787237630214",
    "photos": [
      {
        "url": "https://upload-bbs.miyoushe.com/upload/2026/08/20/4849343/33b550fee6df0905d0c540c5514dcebf_3426803533825177878.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
      },
      {
        "url": "https://upload-bbs.miyoushe.com/upload/2025/08/22/429668945/4f722c349ced9ceb0e0081f75be9c9c5_8234239911221306624.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"
      }
    ],
    "date": "2026-08-20"
  }
];