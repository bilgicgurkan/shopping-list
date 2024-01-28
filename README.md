# Shopping List

[![N|Instagram](https://cdn.iconscout.com/icon/premium/png-512-thumb/instagram-2752153-2284970.png?f=webp&w=256)](https://www.instagram.com/bilgicgurkan/)
# Follow me on IG

# Development

Projeyi localinizde ayağa kaldırmak için kapatmayacağınız bir terminal açın aşağıdaki komutu yazın:
```sh
npm run start
```

Json-server kullanımı için yeni bir terminal açın, json-api dosya yolunu yakaladıktan sonra aşağıdaki komutu girin:

```sh
json-server --watch list.json
```

## Neler yapılabilir?

##### Yeni bir alınacak ürün/ürün adedi/fiyatı ekleyebilirsiniz. Ürün adı ve ürün adedi zorunlu, fiyatı opsiyonel bırakılmıştır.
![image](https://github.com/bilgicgurkan/shopping-list/assets/103066696/5e759e94-d534-48b3-ace9-d9971b8eeb7f)
#####  Eklediğiniz ürünü düzenleyebilirsiniz. Ayar ikonuna tıkladıktan sonra seçtiğiniz ürün tekrar boş input alanlarına gelir ve
###### save the list butonu
- aynı ürünleri yeni bir ürün gibi kaydeder
###### update butonu
- seçtiğiniz ürünü günceller
![image](https://github.com/bilgicgurkan/shopping-list/assets/103066696/6a576a2e-511c-44c2-be75-1e7b72d97d28)
> eğer seçtiğiniz üründe herhangi bir değişiklik yapmazsanız update butonu değişiklik yapılmadığı için herhangi bir şarta girmez ve herhangi bir değişiklik kaydedilmez. Kullanıcıya da bunun uyarısı gösterilir.
![image](https://github.com/bilgicgurkan/shopping-list/assets/103066696/2dad406e-b697-463b-9413-852294dd6222)

- cancel butonu değişilik talebini iptal eder

##### Eklediğiniz ürünü delete butonu ile silebilirsiniz.

##### Eklediğiniz ürünün satın alma işlemi gerçekleştikten sonra yanında checkbox ile ürünün tüm öğelerinin üzerini çizebilirsiniz. Bununla birlikte checkbox işaretlemesi ardından ürünün düzenleme ve silme görevleri de disabled olur.
![image](https://github.com/bilgicgurkan/shopping-list/assets/103066696/e3ec253c-3689-479c-86bf-47e5e5598e9d)

## Tech

- [JSON Server] -  Bir database gibi davranıp kullanıcıdan gelen verilerin kaydedilmesi / daha sonraki oturumlarda gösterilmesi / güncellenmesi / silinmesi için sahte bir json veri döndürür.
> https://www.npmjs.com/package/json-server
> &
> https://github.com/typicode/json-server/tree/v0
- [Google Fonts] - basit google fontları kullanıldı.
> https://fonts.google.com/
- [node.js] - Projenin backend yapısının kurulması/ bundle edilmesi, birbiriyle konuşması / Dependencies taraflarının projeye eklenmesi sağlandı.
- [webpack-dev-server] - Projenin local ortamda ayağa kaldırılması ve anlık olarak yapılan değişikliklerin tarayıcı üzerinde kontrolünü sağlanması için kullanıldı..
> https://www.npmjs.com/package/webpack-dev-server?activeTab=readme
