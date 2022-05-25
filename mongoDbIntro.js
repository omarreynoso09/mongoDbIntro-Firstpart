// Monday Assignment

// db.collection.count()
// let blogPost = {
//     createAt:new Date().toString(),
//     title:"first blog post",
//     text:"this is a blog post for training purpose",
//     author:"hansel reynoso",
//     id:String(db.posts.count()+1 )
// }

// db.posts.insertOne(blogPost);

// db.posts.find(
//     {
//         author: "hansel reynoso"
//     })

// db.posts.updateOne({title: "first blog post"},
// {$set:{ title:"Updated First Blog Post"}})

// db.posts.deleteOne(
//       { id:String(db.posts.count())}
//       )

//Tuesday Assignment

// let fiftyPosts = [
//     {
//      "createdAt": "2022-01-11T02:04:23.863Z",
//      "title": "accusantium",
//      "text": "Qui quae deleniti hic. Est sint consequatur illo dolor voluptas. Consequatur soluta distinctio. Nisi itaque officia fuga officia temporibus dicta optio. Sed aut exercitationem consequatur omnis quia inventore.\nMinima quas sint quos officia distinctio. Odit quod incidunt modi assumenda. Quae harum hic voluptatem odit dolores non. Perspiciatis iure hic numquam. Incidunt cum soluta dolor quibusdam sapiente excepturi ut quis.\nSint eaque numquam magnam et. Quasi hic consequatur. Ad doloremque sed.",
//      "author": "Traci Bins DVM",
//      "lastModified": "2022-05-24T13:39:26.182Z",
//      "category": "qui",
//      "id": "1"
//     },
//     {
//      "createdAt": "2021-06-08T12:25:55.889Z",
//      "title": "officia",
//      "text": "Ducimus consequuntur suscipit sed voluptatem dolor animi. Velit ut laboriosam dolores error soluta. Numquam suscipit eos officiis sunt maxime tempore quibusdam explicabo. Iure adipisci nesciunt placeat quis.\nOmnis quaerat ut quisquam deserunt harum qui. Omnis exercitationem voluptatem id cumque est dolores tenetur doloremque. Et est velit veniam ex dolore cupiditate. Amet aliquam maiores in. Fuga officiis ipsam voluptas vel.\nSapiente est in aut rerum aut. Suscipit enim facere. Qui placeat excepturi possimus.",
//      "author": "Jacqueline Hudson",
//      "lastModified": "2022-05-24T00:55:08.105Z",
//      "category": "dolores",
//      "id": "2"
//     },
//     {
//      "createdAt": "2021-07-31T01:02:14.509Z",
//      "title": "illum",
//      "text": "Ea nihil aut aut. Hic non consequuntur et harum asperiores. Quo autem in est corporis aspernatur est mollitia sint nostrum. Amet iure assumenda.\nEt omnis velit. Cupiditate voluptatibus eum officiis. A velit ab a unde ut voluptate quaerat. Architecto enim accusantium eos sed velit voluptas velit id occaecati.\nNon ea velit et voluptates qui vel. Soluta veniam quasi velit veniam. Dolores voluptate quibusdam consequuntur molestiae repellendus cupiditate voluptas. Dignissimos esse totam tempora expedita eum. Aspernatur velit aut autem et velit necessitatibus perspiciatis exercitationem. Dolorum ducimus facilis sed alias quaerat sunt ipsum nostrum nemo.",
//      "author": "Miguel Hackett",
//      "lastModified": "2022-05-23T18:45:53.742Z",
//      "category": "commodi",
//      "id": "3"
//     },
//     {
//      "createdAt": "2021-10-30T18:00:19.202Z",
//      "title": "voluptate",
//      "text": "Rem repellat iste ratione. Modi nisi fugit nisi assumenda sit est facilis. Ipsum sequi ullam odio est necessitatibus cumque corporis non. Expedita ducimus quo sunt beatae debitis.\nAperiam qui illo est eos amet est optio. Aut quia amet aut non laboriosam possimus vitae. Mollitia alias quaerat ipsa nemo.\nIste laboriosam iure labore eum aut nihil rerum ut expedita. Quod neque sed debitis et atque. Tenetur nihil quia sapiente laboriosam alias. Nisi doloremque eum.",
//      "author": "Sonja Considine",
//      "lastModified": "2022-05-24T09:13:11.344Z",
//      "category": "dolor",
//      "id": "4"
//     },
//     {
//      "createdAt": "2021-11-12T05:53:38.000Z",
//      "title": "quod",
//      "text": "Quam necessitatibus nihil omnis laborum neque est a a voluptates. Occaecati aliquam officiis. Sed adipisci consectetur aut nulla aperiam harum ea voluptates eos. Recusandae harum dicta voluptatem autem voluptate doloremque laudantium qui dolorum. Laudantium cupiditate excepturi fugiat ea nam. Quidem inventore pariatur esse unde laboriosam voluptate et quis fuga.\nEt dolorem culpa sint. Qui sunt dignissimos fuga et eum. Tempora error voluptas aut eum provident.\nAperiam et optio qui nesciunt dolore consequuntur dolor est. Sed eius distinctio doloribus libero atque ullam id. Laborum qui facilis magni voluptatem sed quaerat voluptatum pariatur. Autem ea eum. Sit quisquam quasi modi voluptatum rem dolores vel omnis dolorum. Porro suscipit aut id.",
//      "author": "Sara Hickle",
//      "lastModified": "2022-05-24T08:32:40.447Z",
//      "category": "non",
//      "id": "5"
//     },
//     {
//      "createdAt": "2021-09-26T09:37:21.995Z",
//      "title": "sed",
//      "text": "Quod quia ratione similique nesciunt eaque. Nesciunt harum asperiores esse magnam debitis sequi praesentium aut dolorum. Corporis occaecati dicta quos qui et. Veniam consequatur et et est dicta illo voluptas. Officia placeat molestias. Et aut repellendus temporibus voluptas explicabo in non.\nNon neque doloremque distinctio et nisi omnis aliquam eos voluptatem. Et error nihil vitae quia occaecati. Suscipit tempora numquam assumenda autem.\nTenetur cum voluptate animi officia aperiam. Labore consequuntur minus illum quis non unde ea autem. Et error exercitationem laudantium non voluptatibus id. Qui ad et. Ut nisi nostrum laboriosam. Laboriosam repellendus ipsa id ab vitae sapiente delectus ullam nam.",
//      "author": "Rosa Stoltenberg",
//      "lastModified": "2022-05-24T02:09:24.802Z",
//      "category": "eaque",
//      "id": "6"
//     },
//     {
//      "createdAt": "2021-12-03T15:48:33.320Z",
//      "title": "ipsa",
//      "text": "Quis hic ut deserunt delectus omnis sint. Voluptates dolores inventore et cum voluptatibus nobis consequatur voluptatum unde. Voluptas voluptatibus vitae consectetur vero assumenda odio ea eligendi. Aut fugiat aut ea magnam et repellendus voluptatem. Blanditiis maxime reiciendis corrupti ipsam dolorem. Pariatur qui qui rerum sapiente quaerat mollitia quis maxime molestiae.\nEx unde sequi fuga. Molestiae explicabo id. Sed sint corporis eos accusamus possimus laborum et amet. Nemo fugiat ut quo et numquam facilis ea incidunt. Numquam incidunt molestiae sunt tempore id sequi voluptas maxime repudiandae.\nNeque libero non et quibusdam dolor quibusdam ipsa nihil ea. Molestiae voluptatem accusamus voluptatem omnis voluptatem est eaque. Tempora delectus et ut et vel ratione aperiam quo.",
//      "author": "Santos Huels",
//      "lastModified": "2022-05-24T08:26:46.374Z",
//      "category": "omnis",
//      "id": "7"
//     },
//     {
//      "createdAt": "2021-09-19T12:35:57.829Z",
//      "title": "animi",
//      "text": "Maiores quidem placeat fugit quis. Voluptas expedita perspiciatis corporis nesciunt. Eum adipisci adipisci deserunt eos sit dolorum et. Est velit quis aut nobis officia quaerat.\nEst dignissimos ut rerum adipisci aut blanditiis eos. Sit id unde aspernatur officia. Laborum at consectetur minus nemo odit rerum. Ut dolores officia eligendi culpa odio delectus exercitationem. Dicta exercitationem recusandae reiciendis consequuntur quibusdam aut ut.\nIn et vero qui nisi dicta aut corrupti enim et. Aut nesciunt excepturi iure et laboriosam quidem. Quod nihil voluptas. Quis ratione expedita veritatis sed ipsam tenetur id voluptas dignissimos. Possimus veniam omnis incidunt iste quasi dicta ea doloremque.",
//      "author": "Edmond Heidenreich",
//      "lastModified": "2022-05-24T08:11:26.932Z",
//      "category": "qui",
//      "id": "8"
//     },
//     {
//      "createdAt": "2022-03-08T21:50:56.226Z",
//      "title": "ullam",
//      "text": "Dolores quaerat autem mollitia voluptatem odit tempore. Mollitia reiciendis sint similique. Est velit sed id non est accusamus.\nEt sed impedit tempora provident. Laudantium facilis debitis accusamus corrupti quia. Amet quod porro debitis sed veritatis rerum quos et. Reiciendis fuga eius possimus. Voluptatum quas nam aliquam magnam voluptas similique et in. Doloremque vel ipsa fugiat labore non assumenda.\nItaque ipsum asperiores repellat qui laborum. Ea aut occaecati. Reprehenderit accusantium sapiente. Praesentium ab quis omnis rem incidunt. Molestiae eaque cupiditate fugiat provident aut aperiam optio nam officia.",
//      "author": "Rochelle Stamm",
//      "lastModified": "2022-05-24T04:21:22.038Z",
//      "category": "nostrum",
//      "id": "9"
//     },
//     {
//      "createdAt": "2021-06-07T02:06:21.646Z",
//      "title": "nam",
//      "text": "Impedit libero numquam. Dolores aut reprehenderit debitis autem non id. Et quod neque voluptas et sit aut mollitia neque. Non aut asperiores.\nHic ut sit consequatur iste. Et repellendus neque. Dolor necessitatibus eveniet facere occaecati molestiae.\nSit veritatis voluptatem est ad. Est reiciendis veritatis nobis quis vero non ea. Repellat impedit ut molestiae temporibus. Neque nihil perferendis. Deserunt ipsum sunt.",
//      "author": "Marlon White",
//      "lastModified": "2022-05-24T13:16:03.675Z",
//      "category": "est",
//      "id": "10"
//     },
//     {
//      "createdAt": "2022-01-02T10:08:50.315Z",
//      "title": "architecto",
//      "text": "Sint officiis omnis tempora eligendi. Minus illo consequuntur soluta neque velit sed. Perferendis nemo sint id ut in ea dolores error ducimus. Aut voluptas dolorem est dolores eligendi.\nQuia aut assumenda aliquid. Atque nam vero culpa voluptatibus mollitia. Eligendi voluptatem consequatur voluptates quasi excepturi ipsam sit ad ad. Ut sed sequi. Et maiores qui excepturi animi.\nEst sed ipsam possimus atque nam illum nisi. Qui nam nemo veritatis dolorem magni temporibus maxime consequuntur. Voluptas odit provident aperiam adipisci. Numquam deleniti autem in cumque.",
//      "author": "Jill Reinger",
//      "lastModified": "2022-05-24T06:45:43.299Z",
//      "category": "et",
//      "id": "11"
//     },
//     {
//      "createdAt": "2021-08-16T21:39:37.492Z",
//      "title": "facilis",
//      "text": "Aut vel ipsum odio et ut atque facilis. Eum cum eum aut cum. Veritatis et nam. Voluptatem dolor sed amet quo.\nRepellat sed totam repellat. Quos qui non accusamus quaerat rerum. Doloremque dolor distinctio itaque ea consequatur qui. Optio nisi libero libero qui. Ad molestiae eos sunt non rerum dicta explicabo molestias hic. Quaerat facilis blanditiis magnam aliquam.\nEt illum aspernatur ut voluptatem eius. Quos ut accusamus. Aut dolore quasi eum ut tempora assumenda. Voluptas minus sint provident ducimus exercitationem necessitatibus. Et iure dolores numquam voluptatem cumque. Beatae nisi ratione veniam eum vel deleniti qui et et.",
//      "author": "Laura Bosco Sr.",
//      "lastModified": "2022-05-24T07:40:10.183Z",
//      "category": "ut",
//      "id": "12"
//     },
//     {
//      "createdAt": "2021-06-18T00:39:52.201Z",
//      "title": "dolorem",
//      "text": "Enim unde rerum libero quasi est iste veniam qui. Aut in ea labore magni explicabo. Consequatur ut doloremque debitis fugiat dicta amet illum. Neque corrupti debitis laboriosam. Repellat officiis id vel ab fuga quisquam. Ea maxime officiis.\nRecusandae mollitia distinctio ut in reprehenderit dolor. Nisi ut voluptatem. Consequuntur aut harum et. Rerum quis eos ut iure aliquid quae unde. Et ea qui magni et numquam provident qui enim. Qui iusto quas sint culpa.\nOccaecati fugiat odit autem autem provident. Iure soluta magni. Eaque aut ratione voluptate voluptas iure. Deserunt adipisci incidunt autem repellendus quaerat suscipit ut. Possimus eos consequuntur dolor. Ad non delectus facilis.",
//      "author": "Erica Gislason",
//      "lastModified": "2022-05-24T05:50:19.654Z",
//      "category": "eum",
//      "id": "13"
//     },
//     {
//      "createdAt": "2021-09-11T14:24:17.889Z",
//      "title": "exercitationem",
//      "text": "Nam velit fuga rem illum libero. Dignissimos explicabo ut et sint libero. Velit cupiditate nisi odio iste explicabo voluptatem sed. Magni veritatis est in. Nihil occaecati eaque maxime fuga sed nesciunt maiores. Quae nemo modi nulla qui quaerat.\nQuasi qui quaerat beatae at ab quia enim. Blanditiis velit excepturi voluptatem voluptatem aut reprehenderit dolorem. Ex repellat fuga consequatur voluptate deleniti perspiciatis a quia et. Possimus nobis repudiandae aut et dolor omnis rerum vel. Hic dolor dolores earum sed esse magnam rem rem. Minus quidem et dolorem accusantium sint consequatur ipsum qui dolorum.\nMaiores libero consequatur incidunt libero dolore sit quia quisquam esse. Quas id minima consequatur asperiores non facere commodi quia deleniti. Est vitae modi reprehenderit autem. Veritatis autem mollitia fugit ipsum recusandae.",
//      "author": "Randy Maggio",
//      "lastModified": "2022-05-24T10:08:11.735Z",
//      "category": "occaecati",
//      "id": "14"
//     },
//     {
//      "createdAt": "2022-04-21T02:51:09.311Z",
//      "title": "est",
//      "text": "Aliquam praesentium dolorum quos voluptatibus recusandae. Omnis quos et ut voluptas minima similique eius ut molestias. Ut quod quos perferendis. Sint vero voluptatem perferendis facere illo.\nVoluptatibus et modi. Est quod porro voluptates minus aut excepturi consequuntur molestias minima. Dolores rerum magni aut dolorem esse sint aspernatur. Molestias a et debitis enim tenetur excepturi ratione tempora sequi.\nVoluptas eius quod autem vero placeat voluptatem. Et sed sunt fugiat et ut. Dolor omnis velit asperiores sapiente ut rerum dolores molestias. Perferendis aliquid tempore. Corrupti dicta non sit sed voluptas ex porro.",
//      "author": "Dr. Duane Crist",
//      "lastModified": "2022-05-24T17:58:52.220Z",
//      "category": "sint",
//      "id": "15"
//     },
//     {
//      "createdAt": "2022-02-13T07:09:02.554Z",
//      "title": "dolore",
//      "text": "Maiores ipsum quidem quas. Soluta sequi quidem cupiditate vel. Sit sed et distinctio dolorem exercitationem. Laudantium officiis atque praesentium nisi animi corrupti sequi quod facere. Beatae ut iusto at aut perferendis alias. Nemo in et corrupti.\nIncidunt exercitationem asperiores natus illum totam ut dicta est. Aut ut voluptate. In repellat illo animi voluptas sed in. Assumenda cum tempora sed et tempora voluptatem hic recusandae aut.\nConsequatur qui eius sint tempore qui nemo ex in. Unde ab et blanditiis est aut sed enim. Eum quia corporis.",
//      "author": "Jeff Prosacco",
//      "lastModified": "2022-05-24T04:09:21.497Z",
//      "category": "cumque",
//      "id": "16"
//     },
//     {
//      "createdAt": "2021-08-05T00:10:02.699Z",
//      "title": "deleniti",
//      "text": "Sunt qui eveniet suscipit facere fuga voluptatibus minus explicabo. Velit eveniet consequatur quibusdam hic numquam. Ut architecto harum deleniti id in. Deserunt quaerat et ut et aut. Laudantium iste ut et maxime.\nDucimus quo aut ut pariatur exercitationem blanditiis cum sit. Sed facilis eos voluptate aut non aperiam occaecati ut voluptas. Laudantium perspiciatis a et sunt provident fuga quidem.\nSed ducimus sit rerum sed culpa. Pariatur eos nemo blanditiis illum non et. Et eos ut possimus tempora quo. Suscipit a dolor blanditiis quia officiis nihil eius perspiciatis. Dolor ut doloremque accusantium inventore in incidunt porro illum.",
//      "author": "Cory Abernathy",
//      "lastModified": "2022-05-23T23:07:11.356Z",
//      "category": "illum",
//      "id": "17"
//     },
//     {
//      "createdAt": "2021-08-16T13:20:08.695Z",
//      "title": "est",
//      "text": "Architecto aut voluptatem adipisci consequatur rerum esse omnis. Quis dignissimos quia. Ad at eos eos ducimus cupiditate. Quos minus molestiae quo fugit veniam aliquam.\nIpsum enim nam minus incidunt alias veniam odio quibusdam. Soluta minus commodi aut. Beatae officiis voluptas minus labore qui. Eveniet quasi aut praesentium. Ea asperiores eum. Natus velit earum et.\nReprehenderit minima molestiae fuga in sunt. Maiores porro qui reiciendis deserunt voluptas. Voluptatem blanditiis et velit rerum aut sapiente. Atque modi eos architecto vero non sit doloremque autem aut. Qui totam rerum ut expedita.",
//      "author": "Ken Schneider",
//      "lastModified": "2022-05-24T12:09:01.291Z",
//      "category": "voluptatem",
//      "id": "18"
//     },
//     {
//      "createdAt": "2021-11-12T13:39:04.166Z",
//      "title": "veritatis",
//      "text": "Optio soluta quod ullam eveniet enim sed facilis. Veniam voluptate et ut velit dolorem asperiores impedit molestiae. Veniam eius ut harum corrupti voluptatem. Enim rerum et inventore magnam.\nRepudiandae vero ipsum ea et. Iste est odio ut atque dolor dolorem. Nihil voluptas saepe odio modi. Possimus quaerat tempore sunt et cum dicta. Quos ut temporibus optio eum cupiditate ut. Expedita adipisci enim ut debitis ex aperiam recusandae facere.\nSoluta dolor quia qui iste. Consequuntur ipsam et occaecati dignissimos laboriosam quaerat. Odio cum quidem et delectus aliquam nobis. Ducimus sit quisquam excepturi illum nihil. Nemo earum deleniti quasi similique.",
//      "author": "Martin Quitzon",
//      "lastModified": "2022-05-23T23:05:54.603Z",
//      "category": "error",
//      "id": "19"
//     },
//     {
//      "createdAt": "2021-05-31T04:27:17.312Z",
//      "title": "et",
//      "text": "Et ex quis quibusdam dicta vel a. Enim consequuntur qui est eos. Quibusdam est molestiae sint esse officiis eos fugit fugiat. Sunt necessitatibus ab qui. Culpa aspernatur sapiente ducimus est magnam. Consequatur non dolorem quidem enim maxime.\nCum corporis ipsam possimus asperiores iusto accusantium neque placeat molestiae. Eaque eum molestias suscipit. Maiores voluptatem autem commodi qui eveniet labore soluta vitae. Quam enim repellat vel pariatur non perspiciatis assumenda atque.\nVoluptas et itaque voluptatibus. Consequatur sint reiciendis. Sequi esse ut rem ipsum alias animi facilis error aut. Officia impedit velit repudiandae dicta est officia. Esse consequatur dolores in explicabo non. Rerum quia nulla nostrum repudiandae libero deleniti natus pariatur.",
//      "author": "Tom Botsford",
//      "lastModified": "2022-05-24T04:49:47.273Z",
//      "category": "perferendis",
//      "id": "20"
//     },
//     {
//      "createdAt": "2021-11-10T05:27:12.709Z",
//      "title": "quia",
//      "text": "Ut nihil facilis voluptates voluptates dolor. Error voluptatem qui. Ut et vel sit laborum doloribus earum ipsum.\nDolores et provident nisi doloribus eum et deserunt velit dolor. Nam eum facere alias sit et nobis. Adipisci natus repellendus ex dolore atque eligendi aspernatur blanditiis modi. Molestiae veritatis quasi est. Reprehenderit repudiandae animi debitis. Voluptates officia dicta enim.\nAd ut est cumque in autem maxime. Ut dolores doloribus neque in distinctio similique assumenda unde labore. Quas deleniti quas quod qui voluptatem corrupti qui. Nulla eum tempora facilis est harum amet rerum. Aut impedit corporis voluptatem possimus quo ea ut facere.",
//      "author": "Jeanne Koepp",
//      "lastModified": "2022-05-24T10:19:45.540Z",
//      "category": "vero",
//      "id": "21"
//     },
//     {
//      "createdAt": "2021-11-21T00:23:36.330Z",
//      "title": "mollitia",
//      "text": "Rerum voluptatem rerum incidunt nobis voluptas alias et. Nihil eligendi ullam nostrum. Repellat nihil quasi beatae reprehenderit. Sed sapiente voluptas rem.\nVoluptatem officia et ratione quae vel quo quam tenetur quas. Deleniti facere voluptas dolorem similique dolores nulla. Distinctio voluptatem fuga et unde dignissimos tempora in.\nInventore veritatis hic. A asperiores provident porro explicabo hic vitae qui fugiat. Quaerat ut dolorem consequatur. Cumque qui molestiae ab debitis natus quia facere in omnis. Quaerat et fuga quia voluptate.",
//      "author": "Hattie Jacobs",
//      "lastModified": "2022-05-23T18:24:33.351Z",
//      "category": "eligendi",
//      "id": "22"
//     },
//     {
//      "createdAt": "2022-04-17T23:56:31.344Z",
//      "title": "totam",
//      "text": "Aut neque ea rerum aliquid. Autem dignissimos dicta quo qui adipisci ratione. Saepe aut qui quis sed quos vel qui sint. Accusamus rem consectetur voluptas sit vel sed. Asperiores voluptatum unde accusantium atque.\nUt provident quasi illum aut. Sit dignissimos quos. Sed excepturi fugit corporis sunt porro. Consequatur qui repellat earum sit vero odio. Dicta hic cumque accusantium quisquam rerum incidunt ut.\nAb nostrum ea debitis et ea est consequatur molestias et. Corporis ut qui dolor illum autem autem. Qui libero officiis. Fuga magni aut facere fuga.",
//      "author": "Tami Kreiger",
//      "lastModified": "2022-05-23T23:48:39.529Z",
//      "category": "rerum",
//      "id": "23"
//     },
//     {
//      "createdAt": "2021-06-29T17:08:48.890Z",
//      "title": "dolores",
//      "text": "Qui reiciendis enim dignissimos. Veniam harum aut corporis illum nisi. Et quos voluptas quis blanditiis. Nesciunt ab a laborum rem velit est. Velit eligendi corrupti voluptas aperiam voluptatem.\nIpsum eius assumenda praesentium commodi adipisci molestiae quasi expedita et. Non amet dolor vel. Sed consequuntur placeat modi delectus velit sit quod vitae.\nQuo doloremque pariatur accusantium sequi corporis ut tempora non sunt. Aut corporis occaecati suscipit sed. Autem et consequatur. Quia voluptatem ut autem optio. Eum eveniet velit. Cumque quidem iure dignissimos eius.",
//      "author": "Joan Satterfield",
//      "lastModified": "2022-05-24T05:58:35.841Z",
//      "category": "ea",
//      "id": "24"
//     },
//     {
//      "createdAt": "2022-01-16T05:07:47.109Z",
//      "title": "non",
//      "text": "Recusandae magni aperiam necessitatibus et recusandae laudantium ex. Magnam quas eaque ullam qui voluptatibus sequi deleniti est. Minus quia nesciunt. Non aperiam ad voluptatum dolores libero nobis. Nam porro nihil natus quis esse et. Adipisci at facilis voluptas.\nDolore repellendus laboriosam. Quidem quidem ad aperiam et velit est non recusandae at. Quo vel fuga molestias nemo sed consequuntur quam suscipit ut. Ipsam accusamus molestias a qui numquam id aut aut ut. Id animi sint quis. Rem qui voluptas.\nMinima praesentium animi asperiores quibusdam aut voluptas repellendus. Temporibus aut rem error porro eaque tenetur doloribus dolor exercitationem. Quos non vel qui et quia laboriosam. Asperiores hic eos expedita amet.",
//      "author": "Inez Rosenbaum",
//      "lastModified": "2022-05-24T06:09:28.809Z",
//      "category": "rerum",
//      "id": "25"
//     },
//     {
//      "createdAt": "2022-05-11T17:00:21.247Z",
//      "title": "dignissimos",
//      "text": "Accusantium sint temporibus modi ut voluptatem necessitatibus ad. Natus rerum minus placeat assumenda. Id enim voluptates dolorem ab aut minus quia dolorem.\nNihil rerum ad aperiam esse. In consectetur voluptatem aut. Iste repellat vel deserunt fuga enim accusamus pariatur quaerat rem. Deleniti ratione sed voluptatem quos ipsa asperiores. Laborum quia sed maiores beatae enim.\nIpsam saepe asperiores et quas adipisci ut. Voluptatem nihil est quia vel. Cupiditate ad culpa vel enim sunt quo quo.",
//      "author": "Maureen Langosh",
//      "lastModified": "2022-05-24T15:05:35.041Z",
//      "category": "magnam",
//      "id": "26"
//     },
//     {
//      "createdAt": "2021-12-10T02:24:48.842Z",
//      "title": "temporibus",
//      "text": "Ad rem molestiae ad est itaque maiores. Est soluta non blanditiis commodi et ea. Consequatur expedita amet suscipit libero unde inventore assumenda modi. Aut sit tenetur eum eum aut quis quia. Fuga commodi et quis sit dignissimos. Est nesciunt asperiores labore aut aliquam consectetur.\nAspernatur eligendi ut. Sapiente aut est ut nam ullam et. Aut rem quasi.\nNisi placeat consequatur sint necessitatibus autem ratione quo occaecati distinctio. Aut non et dolores iste adipisci. Odio id iste. Dolore et quia explicabo. Quae quos vitae aut aut autem sed vitae quis.",
//      "author": "Abel Dach",
//      "lastModified": "2022-05-24T02:25:20.526Z",
//      "category": "iure",
//      "id": "27"
//     },
//     {
//      "createdAt": "2022-05-14T19:40:15.179Z",
//      "title": "debitis",
//      "text": "Maxime quos explicabo omnis quisquam doloribus. Tempore qui minus molestias molestias nesciunt rem ut dolore ipsum. Neque ea vero dolores culpa libero voluptatum accusantium non. Debitis quisquam iste.\nItaque error hic itaque sed quia expedita dicta totam. Animi deserunt voluptate eaque consectetur quia accusamus beatae id. Dolorem perspiciatis asperiores distinctio nisi omnis voluptas ut. Dolor dolores explicabo. Non voluptas porro. Non sed harum sapiente dolorum dicta beatae vero temporibus quod.\nEst quis ut autem ex rem ipsum autem. Et nisi aliquid asperiores est id ut et qui voluptas. Voluptas porro ad sed et odit.",
//      "author": "Sharon Emmerich",
//      "lastModified": "2022-05-24T00:12:13.507Z",
//      "category": "consectetur",
//      "id": "28"
//     },
//     {
//      "createdAt": "2022-03-27T11:39:47.414Z",
//      "title": "vero",
//      "text": "Quaerat aspernatur quis. Voluptas eum minus voluptate suscipit perspiciatis esse. Unde cupiditate impedit omnis qui sed quasi doloremque. Qui occaecati sint facere quod amet facilis incidunt fugit voluptas. Quae sequi atque enim enim et quis inventore dignissimos consequatur. In reprehenderit odio vel vitae eligendi.\nEnim in quam placeat aut commodi repudiandae inventore. Consequatur aut cupiditate magni est ab nostrum. Quasi ex est.\nCommodi sed sint iusto sint sint. Nam totam aut minima. Nihil quam sed.",
//      "author": "Miss Sonja Farrell",
//      "lastModified": "2022-05-24T01:34:09.430Z",
//      "category": "nobis",
//      "id": "29"
//     },
//     {
//      "createdAt": "2021-06-15T17:03:47.456Z",
//      "title": "quis",
//      "text": "Aut aut facilis ab ad quaerat neque doloribus quos. Qui recusandae quibusdam odio. Eligendi culpa ea et eos eum quia repellat est non. Et ut assumenda fuga. Sunt molestiae sint laudantium adipisci dolorem sequi. Placeat quos voluptas aliquid beatae non rerum omnis.\nRecusandae quia quia. Ut quia qui omnis. In quo natus minima sed repudiandae voluptate quis. Qui sit esse nesciunt est voluptas dolor autem. Ipsum necessitatibus ea laborum provident et. Provident doloremque nam et doloremque ut eum tenetur.\nQuia et eum consequatur et doloremque. Et tempora expedita iure sapiente aut voluptatem sunt dignissimos quam. Itaque laborum tempore eum ipsam corrupti quo nesciunt saepe. Repudiandae dicta vitae illum omnis. Nihil harum quam.",
//      "author": "Delia Abernathy",
//      "lastModified": "2022-05-23T19:57:06.105Z",
//      "category": "hic",
//      "id": "30"
//     },
//     {
//      "createdAt": "2021-08-20T19:12:18.298Z",
//      "title": "rerum",
//      "text": "Voluptatem et similique maiores nihil. Id dolores ea est. Sunt at aperiam alias id cupiditate. Molestiae maiores et alias. Architecto in sequi eveniet.\nSint illo beatae eum et ab aut repellat et laborum. Ab sapiente nam ratione est repellendus et. Repellat molestiae dolorum architecto et blanditiis labore.\nPorro soluta ipsa qui quaerat qui quia. Sint perferendis adipisci consequatur. Doloribus rerum laudantium. Qui ut est necessitatibus quo.",
//      "author": "Wilma Hintz",
//      "lastModified": "2022-05-24T05:32:18.401Z",
//      "category": "totam",
//      "id": "31"
//     },
//     {
//      "createdAt": "2022-01-16T05:07:09.597Z",
//      "title": "ut",
//      "text": "Sunt a soluta qui est velit accusamus. Error voluptates aut aut maiores itaque sit. Quas ut tenetur qui. Itaque omnis officiis repellat. Sint expedita saepe in repellat sunt.\nQuia fugiat eum officia necessitatibus modi aliquam. Quis facilis nemo omnis quisquam rerum molestiae. Molestias rerum quo quod natus ut.\nNesciunt fugit necessitatibus quia aut omnis labore voluptatibus amet. Debitis voluptatibus quia error facilis unde nulla. Aut ipsum sint non voluptatem sit sit.",
//      "author": "Ms. Ellen Davis",
//      "lastModified": "2022-05-24T15:01:36.914Z",
//      "category": "aliquid",
//      "id": "32"
//     },
//     {
//      "createdAt": "2022-03-02T11:23:39.994Z",
//      "title": "commodi",
//      "text": "Eos dolor nihil voluptas. Et magni voluptatibus ducimus quibusdam. Labore iure ut magni. Vitae vitae et tenetur quis aut.\nAut maxime distinctio minus. Est aliquam qui sunt quia illo corrupti. Aut error ut et sequi minima. Natus vitae et sed quo maxime consequuntur perspiciatis.\nEius placeat voluptatibus sint. Id odio vitae est voluptatum necessitatibus. Aliquam atque eius. Reprehenderit aut illum iure et. Vitae veritatis neque et consequatur explicabo quae nesciunt aperiam. Nemo similique asperiores ducimus odit eligendi dolores et esse.",
//      "author": "Blanca Hirthe",
//      "lastModified": "2022-05-24T11:48:50.549Z",
//      "category": "cum",
//      "id": "33"
//     },
//     {
//      "createdAt": "2022-04-02T04:46:51.647Z",
//      "title": "harum",
//      "text": "Ut ut esse voluptatum maiores aperiam nobis. Tempore voluptatum quidem molestiae voluptatem voluptate. Et sint laborum eos. Fugiat est aut corporis aut quis labore officia nesciunt quia. Fugiat non nesciunt neque voluptatem exercitationem provident deserunt id tenetur.\nIure id aliquam. Necessitatibus voluptas provident consequatur suscipit nobis exercitationem blanditiis. Tenetur error ut magnam dolor accusamus recusandae asperiores dolore. Est aliquam dolor quas et quaerat et. Magnam error et deserunt totam aliquam. Nesciunt perspiciatis voluptatem numquam quaerat et officia eum.\nNon praesentium modi vel sit dicta. Et ab repellendus enim necessitatibus qui. Ab explicabo rerum iste adipisci nemo laborum. Consequatur totam corrupti reprehenderit cumque.",
//      "author": "Norman Legros",
//      "lastModified": "2022-05-24T06:41:56.693Z",
//      "category": "aliquid",
//      "id": "34"
//     },
//     {
//      "createdAt": "2021-11-06T11:28:23.637Z",
//      "title": "eligendi",
//      "text": "Sed esse est repellendus vel in. Rerum tenetur aut et quasi corrupti ut. Maxime veritatis occaecati aperiam inventore.\nEx hic tenetur sequi aliquid. Praesentium accusantium repudiandae eum sunt dolorem totam sapiente neque ab. Inventore similique tempora maxime ratione sapiente.\nEst beatae quos. Ut amet expedita officia. Corporis sed repudiandae et ipsum sit. Consectetur omnis iusto. Molestiae commodi ut beatae. Natus illum autem consequatur recusandae sit aspernatur voluptatem et.",
//      "author": "Terrence Lueilwitz",
//      "lastModified": "2022-05-24T16:07:59.725Z",
//      "category": "corrupti",
//      "id": "35"
//     },
//     {
//      "createdAt": "2021-10-22T15:00:37.632Z",
//      "title": "suscipit",
//      "text": "Est facere optio consequuntur quia. Voluptatem nostrum id et ut et autem et culpa. Animi rerum rem. Provident dolore architecto tempora ab facere.\nLaudantium perspiciatis porro ex quis commodi incidunt eos. Nulla non repudiandae. Maiores odio eum cum maxime. Non animi sed quia.\nQuo excepturi quis. Ipsam assumenda repellat debitis. Optio enim aut maxime dolores illum sit ea nostrum.",
//      "author": "Tamara Cormier",
//      "lastModified": "2022-05-24T08:52:46.189Z",
//      "category": "aut",
//      "id": "36"
//     },
//     {
//      "createdAt": "2021-08-17T22:55:18.336Z",
//      "title": "doloribus",
//      "text": "Cupiditate et voluptatum itaque id molestiae beatae quasi eum aliquam. Ipsa dicta vel facilis ut quas eligendi excepturi autem. Autem quasi accusantium. Dolor quia sit delectus voluptate distinctio. Perspiciatis possimus culpa.\nQuod aspernatur in ullam. Fugit voluptatibus rerum sed voluptatem facilis soluta. Maiores nobis reprehenderit. Repellendus ut minima expedita. Est et fuga molestiae alias corrupti et maiores non fugit.\nSed tempora enim ut porro temporibus non aut corporis. Quidem et ducimus enim quos consequatur rem possimus aperiam. Molestiae dolores qui aut cumque.",
//      "author": "Randal Will IV",
//      "lastModified": "2022-05-23T23:47:24.491Z",
//      "category": "dolorem",
//      "id": "37"
//     },
//     {
//      "createdAt": "2021-11-24T06:18:26.266Z",
//      "title": "et",
//      "text": "Sed et quam soluta commodi ducimus cum ut. Hic ipsa reprehenderit velit asperiores. Nemo voluptate odio ut aut et ut rerum. Deleniti porro vitae qui consequatur enim doloremque exercitationem. Voluptatem fuga facilis sed repellat sed id. Dolorem ad consequatur et sit alias quaerat.\nVoluptatibus laboriosam amet. Beatae et cumque illum nihil qui excepturi et sed nihil. Omnis quaerat et eligendi dolor saepe eos neque aut. Nemo totam dolorum porro et saepe corporis quam dolores. Provident velit adipisci consequatur.\nMinima ut quod et amet quisquam. Libero dolores rerum sequi rerum esse accusamus. Optio ex quia consequatur hic necessitatibus.",
//      "author": "Ernestine Hand",
//      "lastModified": "2022-05-23T18:28:26.837Z",
//      "category": "maiores",
//      "id": "38"
//     },
//     {
//      "createdAt": "2022-04-27T16:03:16.449Z",
//      "title": "velit",
//      "text": "Vel neque nostrum vero repellat possimus facere iure quaerat minus. Deleniti qui officia itaque. Consequuntur eos laborum et deserunt dolorum voluptatum qui placeat ut. Veniam ut accusantium et.\nVoluptatem aperiam commodi odio vero inventore quia omnis explicabo. Tenetur consequatur voluptate voluptate exercitationem sed recusandae est dolor iste. Enim ipsam aut et est perferendis vero. Nihil sit inventore incidunt maxime libero non consequatur quos. Excepturi natus nam quos aliquid. Adipisci quasi eos quidem.\nIn tempore non eum voluptatem qui dolores. Architecto officia eum mollitia aut. Reiciendis reprehenderit dolorem excepturi officiis aut corrupti. Sapiente impedit aut distinctio repudiandae voluptatem modi. Officiis nihil iusto modi dolor. Aut reprehenderit dicta ut impedit blanditiis sunt.",
//      "author": "Kelvin Huels",
//      "lastModified": "2022-05-24T04:06:44.671Z",
//      "category": "repellendus",
//      "id": "39"
//     },
//     {
//      "createdAt": "2022-04-24T21:32:24.385Z",
//      "title": "necessitatibus",
//      "text": "Quo natus eos quidem architecto quibusdam voluptas ullam et. Quidem animi qui vel ducimus sapiente magnam iure. Tenetur deleniti et temporibus aperiam dolor. Praesentium id quis natus distinctio. Architecto sint corporis expedita quo quisquam et facere natus aspernatur. Excepturi voluptatem unde nam porro itaque totam nisi nesciunt.\nCupiditate consequatur possimus et architecto a. Eos earum id unde quo autem et. Consectetur natus est ipsam reprehenderit voluptates aliquid quibusdam et.\nVitae voluptatem et debitis qui itaque ut accusantium et. Et perferendis amet omnis quia impedit. Itaque sequi corporis eaque cumque non. Laborum rerum sed necessitatibus.",
//      "author": "Nicole Pacocha DDS",
//      "lastModified": "2022-05-24T12:52:10.294Z",
//      "category": "vitae",
//      "id": "40"
//     },
//     {
//      "createdAt": "2021-11-20T14:31:02.677Z",
//      "title": "consequatur",
//      "text": "Recusandae commodi hic distinctio nesciunt sed. Deserunt rem dolorem eveniet vero mollitia et. Iusto officiis suscipit exercitationem est quia qui ipsam. Iusto non quia delectus inventore magni est est. Modi a quam amet iusto explicabo harum ab non sed. Ipsa molestiae ullam officiis sint laborum.\nQuo non aut dolore optio dicta. Quis ea ut natus corporis alias doloremque tempora natus. Aut molestiae mollitia sapiente officia cum voluptatibus dolor. Soluta ut accusantium id. Dolores autem id et. Et quidem praesentium accusantium cupiditate delectus.\nAccusantium sapiente eos sed voluptate nihil commodi et ullam. Aliquid et exercitationem fugit. Impedit enim corporis et eaque pariatur minima. Facilis dolores dolor rem. Autem provident qui reprehenderit.",
//      "author": "Caroline MacGyver",
//      "lastModified": "2022-05-24T04:09:12.460Z",
//      "category": "harum",
//      "id": "41"
//     },
//     {
//      "createdAt": "2021-11-15T01:25:09.511Z",
//      "title": "a",
//      "text": "Voluptatem dolore consequatur ea et repellendus. Non ex velit facere nesciunt id id odio doloribus beatae. Aut dicta odit vel laborum voluptas dignissimos est.\nQuod velit corrupti iusto tempora nam officiis aliquid et et. Odio aut dolore officia adipisci nemo ea. Vero tempore corporis placeat sed odio iure eligendi beatae. Nostrum omnis quo eius voluptatem in.\nVeritatis repellat ut eveniet ab architecto nihil. Et nobis fugit iusto reprehenderit veniam repudiandae reprehenderit saepe. Quam maiores nesciunt temporibus similique veritatis non.",
//      "author": "Travis Boehm Sr.",
//      "lastModified": "2022-05-24T06:45:08.926Z",
//      "category": "reprehenderit",
//      "id": "42"
//     },
//     {
//      "createdAt": "2022-01-31T05:26:12.892Z",
//      "title": "sit",
//      "text": "Dolorum sequi dolores optio. Consequuntur sit dicta ut debitis et architecto. Quia atque qui accusamus impedit. Architecto et necessitatibus qui quo vel est deserunt omnis. Eos asperiores unde id in. Neque ex veritatis quia illo sunt.\nConsequatur asperiores cupiditate ratione unde perferendis recusandae quo ducimus natus. Omnis aut sit. Voluptas rerum quibusdam est neque modi voluptate dolorem voluptatibus. Facere impedit quis ullam est odio provident consequatur. Odit aliquid qui error incidunt ut porro. Culpa doloremque at harum nam hic.\nAspernatur aut eius et in fugiat. Sed debitis explicabo quae veniam impedit. Quae rerum assumenda nobis ipsa praesentium est ipsa. Rerum atque aliquid facere cum iusto.",
//      "author": "Ms. Rick Orn",
//      "lastModified": "2022-05-24T09:43:48.277Z",
//      "category": "dicta",
//      "id": "43"
//     },
//     {
//      "createdAt": "2022-04-20T21:41:34.542Z",
//      "title": "sapiente",
//      "text": "Temporibus voluptatum eos nulla repellendus tempore. Quam quia fugiat ad eveniet inventore ea et deleniti. Inventore sit sunt. Id et aperiam suscipit.\nDucimus et aut corrupti dolorem quae. Ut eum omnis inventore culpa reiciendis consectetur ut. Sapiente qui doloremque omnis provident maxime rerum quis cum. Aut accusamus architecto sed beatae velit maxime non rerum necessitatibus.\nEx corrupti quo autem. Pariatur dolorum voluptas consequuntur dolorum vero voluptas. Nesciunt voluptatibus deserunt ut odio eos expedita iusto expedita ea. Voluptatem vel nihil asperiores doloremque temporibus quibusdam occaecati. Velit consequatur enim. Voluptas ea voluptatem accusamus ipsa eveniet accusamus ullam aut.",
//      "author": "Jesse Windler",
//      "lastModified": "2022-05-23T20:06:08.398Z",
//      "category": "veritatis",
//      "id": "44"
//     },
//     {
//      "createdAt": "2021-09-29T18:54:29.434Z",
//      "title": "incidunt",
//      "text": "Veniam blanditiis et sit rerum. Ea tempore harum repellat dolor harum sit rerum facilis sed. Quos incidunt quas. Quia ut voluptate et laboriosam id autem ad explicabo. Atque voluptates quia aliquam voluptas.\nSint voluptatem dolores fugiat ut architecto asperiores est error quis. Architecto id maxime beatae et voluptatem autem et veritatis. Consequatur aut non. Commodi expedita officia qui ut sint fugit maiores quidem. Nemo magni qui aut inventore iure iure. In voluptates eligendi.\nSed est temporibus quia aspernatur et. Qui doloremque occaecati commodi ut omnis sint quod tempore ullam. Perferendis et molestias soluta nostrum expedita aut ut.",
//      "author": "Perry Runte",
//      "lastModified": "2022-05-24T14:37:54.799Z",
//      "category": "voluptatem",
//      "id": "45"
//     },
//     {
//      "createdAt": "2022-04-23T13:25:46.395Z",
//      "title": "aut",
//      "text": "Corrupti atque mollitia facilis consequuntur. Dicta consequatur assumenda est dolor unde. Excepturi dicta sint iusto qui qui molestiae aperiam. Distinctio perferendis illo saepe consequatur debitis impedit dignissimos. Sed odio fugiat modi corporis et qui eum. Vero ut nobis sed doloribus labore cupiditate ut mollitia ratione.\nEt autem ullam voluptatem temporibus ducimus ut et illum. Porro autem non cum et velit porro facilis velit. Ex unde laborum reprehenderit quia. Voluptas nihil explicabo nemo ut excepturi quibusdam. Eos dolor sit aperiam sunt aliquid voluptas quam.\nVoluptatibus nemo alias dolorem praesentium. Consequatur quasi ab quae nihil cupiditate sequi modi. Quam dolorem et debitis et cupiditate libero laborum. Deleniti repellat qui et enim. Optio consequatur voluptate facere minus numquam eveniet dolor eveniet dolor.",
//      "author": "Rodolfo Mertz DDS",
//      "lastModified": "2022-05-24T10:28:33.127Z",
//      "category": "quod",
//      "id": "46"
//     },
//     {
//      "createdAt": "2021-09-26T23:38:39.850Z",
//      "title": "est",
//      "text": "Molestiae nulla quam eligendi excepturi praesentium in. Velit sed voluptas asperiores. Voluptas id ducimus. Iste illum non reiciendis.\nNihil quasi fuga deserunt possimus nihil dolores accusantium. Perferendis voluptas incidunt recusandae cupiditate eos omnis. Rerum et minus animi excepturi eum molestiae. Quis est asperiores. Laudantium quod quae eligendi. Est illum sed dolorem quis voluptas praesentium.\nAperiam aliquid at et doloremque soluta optio. Quidem blanditiis dolorem. Dolores sint eveniet cupiditate explicabo optio. Qui ut ipsam et assumenda nihil in animi qui explicabo.",
//      "author": "Jean MacGyver",
//      "lastModified": "2022-05-24T13:27:55.617Z",
//      "category": "voluptatem",
//      "id": "47"
//     },
//     {
//      "createdAt": "2022-03-11T22:54:50.975Z",
//      "title": "enim",
//      "text": "Explicabo architecto rem necessitatibus beatae dolores voluptas. Libero occaecati repudiandae dicta aut sunt ut vel. Molestiae voluptas architecto sequi cupiditate accusantium. Reiciendis laudantium cum at. Doloremque hic tempora omnis neque et qui minima repudiandae et.\nFuga itaque sequi id maiores. Magnam suscipit quos omnis porro ut iste aut dolore ut. Assumenda delectus eum hic assumenda fugit architecto. Ab et voluptas.\nRerum molestiae possimus dolores sit qui eius. Modi laborum numquam illum sed. Voluptate fugiat enim sit sit numquam voluptate id ut et. Eaque culpa fuga omnis sint ex vero fugit qui. Explicabo reprehenderit ipsam nulla occaecati beatae similique dignissimos. Quis repellendus porro occaecati similique dicta.",
//      "author": "Kurt Hamill",
//      "lastModified": "2022-05-24T03:45:54.349Z",
//      "category": "reiciendis",
//      "id": "48"
//     },
//     {
//      "createdAt": "2021-11-09T12:27:50.998Z",
//      "title": "tempora",
//      "text": "Doloribus rerum laborum incidunt ut et ipsa itaque pariatur. Non sed quidem quidem perferendis. Quo maiores pariatur.\nDolorem iste et voluptates. Autem reiciendis sit nulla neque provident eos iure sed vero. Consectetur aut ut. Eum et enim officia fuga sunt id blanditiis temporibus. Natus eaque adipisci eveniet et ab.\nDolorum aspernatur aspernatur vero beatae quam aliquam sit repudiandae delectus. Corrupti quis eum explicabo et maiores similique est. Omnis eaque eos magni. Dolorum deserunt qui quisquam qui inventore. Voluptate saepe ipsum sit dolorem maxime ut.",
//      "author": "Mrs. Ernesto Kris",
//      "lastModified": "2022-05-24T03:28:27.042Z",
//      "category": "nostrum",
//      "id": "49"
//     },
//     {
//      "createdAt": "2021-06-30T09:22:47.922Z",
//      "title": "natus",
//      "text": "Qui corrupti officiis eum. Vel nam beatae hic et sed nobis est. Totam accusamus iusto. Corrupti nobis architecto sint. At omnis placeat pariatur ut.\nVoluptas quaerat velit inventore modi voluptatum sit rerum. Officia modi est consequatur voluptates. Et error quo consequuntur et et qui quia exercitationem vel. Rerum qui in deserunt rem ut vitae minima eum aut. Magni explicabo ea sint doloremque.\nSit ipsa dolorem non alias sapiente veniam debitis. Natus aut architecto. Id animi ex.",
//      "author": "Levi Barton",
//      "lastModified": "2022-05-24T16:22:00.730Z",
//      "category": "dolor",
//      "id": "50"
//     }
//   ]

// db.post50.insertMany(fiftyPosts)

// Write a new function

// const getPosts = (limit = 50, skip = 0, sortField, sortOrder, filterField, filterValue) => {
//     const dbSort = sortField && sortOrder ? {[sortField]: sortOrder} : {}
//     const dbFilter = filterField && filterValue ? {[filterField]: filterValue} : {}
//     const dbResult = db.post50.find(dbFilter).sort(dbSort).limit(limit).skip(skip).toArray();
//     return dbResult
// }
// console.log(getPosts( '', '', 'id', -1, "", ""));

// db.post50.find();

// db.post50.find({})
//   .projection({})
//   .sort({_id:-1})
//   .limit(100)
