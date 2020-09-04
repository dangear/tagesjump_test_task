## Test task for TagesJump
### Sort huge file with low RAM

1. Install dependencies ```npm i``` (just [nanoid]() for test-file generation)
2. Generate test-file ```npm run gen 100``` where ```100``` - is file-size limit in Mb. Without argument default size 10Mb.
3. Check ```in.txt```
4. Sorting: ```npm run sort```
5. Check ```out.txt```

### Description:
Algorithm based on ```child-process``` and native ```sort``` util. It will use memory according to what is available: half of the biggest number between TotalMem/8 and AvailableMem. So, for example, if you have 4 GB of available mem (out of 8 GB), sort will use 2GB of RAM. It should also create many 2 GB files in /bigdisk and finally merge-sort them. Native С in node.js! LOL

## Тестовое задание для TagesJump
### Сортировка огромных файлов с маленьким объемом ОЗУ 

1. Установить зависимости ```npm i``` (только [nanoid]() для генератора тестового фалй)
2. Сгенерировать тестовый файл ```npm run gen 100``` где ```100``` - размер желаемого фалйа в Мб. Без аргумента стандартный размер 10Mb.
3. Проверить ```in.txt```
4. Начать сортировку ```npm run sort```
5. Проверить ```out.txt```

### Описание:
Алгоритм основан на ```child-process``` и системной ```sort``` утилите. Он будет использовать память в соответствии с тем, что доступно: половина самого большого числа между TotalMem/8 и AvailableMem. Так, например, если у вас есть 4 ГБ доступной памяти (из 8 ГБ), sort будет использовать 2 ГБ оперативной памяти. Он также должен создать много 2-гигабайтных файлов в /bigdisk и, наконец, объединить-отсортировать их.
