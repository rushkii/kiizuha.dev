---
title: Perjalananku Sebagai Frontend Dev
published: 2025-11-21T23:42:10.798Z
# updated:
description: 'Menceritakan bagaimana saya berkarir sebagai Frontend Developer'
image: '/assets/posts/perjalananku-sebagai-frontend-dev/frontend-journey.webp'
tags: ['Blog', 'Career']
category: 'Programming'
# set to false to publish
draft: true
lang: 'id'
---

Halo semuanya, aku adalah seorang frontend developer yang sudah berkarir sejak 2023 yang
saat ini bekerja di Universitas Terbuka, tapi sebelum itu aku akan menceritakan bagaimana
aku mengenal bahasa pemrograman sampai menjadi frontend developer

### First Programming Language
#### Bot
Jadi, sebenarnya aku itu dulunya bukan seorang frontend developer, awal aku mengenal tentang
bahasa pemrograman adalah Python.

Dlu kenal Python itu karena LINE Bot (unofficial), soalnya dulu aku aktif banget main LINE
gabung-gabung grup random khususnya anime, lalu aku melihat
seseorang menggunakan bot menggunakan perintah seperti \
`!help` atau `/help`, lalu mengeluarkan pesan yang panjang seperti panduan menggunakan botnya,
lalu aku bertanya ke
orang yang menjadikan akunnya sebagai bot seperti bagaimana akun dia bisa respon cepat
seperti itu, lalu aku dikasih repository GitHubnya yang membuatku kebingungan melihat link
tersebut kayak: \
***"waduh, web apaan ini, ga paham sama sekali"*** \
Namun aku pasrah aja dan tidak ingin
cari tahu lebih dalam.

Singkat cerita ada momen di mana aku ingin minta file bot yang
sudah ready-to-use dan minta cara pakenya, \
lalu orang yang ngasih tutorial tersebut akhirnya
kasih tau cara-cara setupnya dan BOOM! 💥, \
akun ku seperti bot yang ketika mengirim `/help`
akan mengeluarkan pesan yang sangat cepat.

Setelah senang akunku bisa menjadi bot, lalu aku penasaran dengan isi filenya, aku sangat
bingung sekali dengan isi filenya yang sangat tidak umum. Aku mencoba mengubah filenya
yang masih terlihat umum sekali di mataku seperti mengubah string, aku dulu berpikir: \
***"gimana ya caraku mengubah text pada pesan _help message_ ini"*** \
Aku search dah tuh textnya dengan fitur search di text editor, pas ketemu langsung aku
ubah text di string tersebut, pas aku re-run scriptnya aku langsung senang banget karena
bisa mengubah isi text pada bot yang ku jalankan.

#### API
Semakin penasarannya aku dengan pemrograman, akhirnya aku ingin belajar cara membuat API.
Aku membuat simple API sampai advance, dari JSON *Hello World* biasa sampai mengolah data
seperti scraping data dari website lain, aku sempat integrasi dengan database juga, namun
cuman simple query saja seperti SELECT, INSERT, DELETE, UPDATE dan kala itu belum tau
yang namanya ACID programming, jadi aku lebih memilih membuat API untuk keperluan
scraping saja untuk beberapa orang yang menggunakan API-ku.

### Frontend Programming
Setelah menyerah pada Python untuk mengejar role Backend, akhirnya aku memulai belajar
hal baru terutama Frontend yang gimana caranya tampilan website itu bekerja pada layar
user.

#### Vue
Jadi pertama kali aku belajar Frontend itu pake Vue, dulu masih Vue 2 klo ga salah,
yang kodenya masih seperti
```js title="App.vue"
Vue.app({
  data(): {
    return {
      name: 'Kizu'
    }
  },
  methods: {
    setName(value) {
      this.data = value
    }
  },
  render(): {
    return (
      <div>{this.data}</div>
    )
  }
})
```
Wah, pokoknya pusing banget dah cara ngodingnya yang kayak gitu, belum ada sebulan langsung
nyerah.

#### React
Lalu beberapa bulan kemudian kenal sama React, waktu belajar React langsung paham
cara kerjanya dan semangat bikin simple UI dan data manipulation, sampai saat di mana aku stuck
pas menggunakan `fetch()`:
```tsx title="App.tsx"
import { useState, useEffect } from 'react';

const HelloWorld = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
  })

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
```
Ujung-ujungnya pusing juga cara set state yang masih pake .then(), karena dlu masih belum tau
cara ngoding yang benar gimana di React, sekarang enak udah ada library data fetcher kyk
Tanstack Query.

#### Svelte

---
