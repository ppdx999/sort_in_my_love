# sort in my love

自分が好きなソートアルゴリズムです。

## 各コードの紹介
### quick_sort.hs
有名どころですがHaskellの５行ソートです。厳密にはクイックソートではないかもしれませんが、シンプルでHaskellらしさが出ていて好きです。

#### Execution
```
$ runghc quick_sort.hs 1 3 4 2 5
> 1 2 3 4 5
```

#### Requirement
- runghc コマンド(+Haskell 実行環境)

### mergeSort.ts
普段よく使用するTypescriptでマージソートを書きました。
このソートは、極めてシンプルな実装でありながらも、実用性も高いところが魅力的です。

#### Execution
```
$ cd sort_in_my_love
$ npm i
$ ts-node mergeSort.ts 1 3 4 2 5
> 1 2 3 4 5
```

#### Requirement
- ts-node コマンド(typescript 実行環境)
- npmコマンド

## テスト
### テストデータの生成方法

以下のコマンドをたたくと、テスト用のデータ(test.data と answer.data)が作成されます。
(本来であればもっと網羅的かつ効率的なテストデータを生成すべきですが、今回は乱数でドカッと生成しています。)

```
$ cd sort_in_my_love
$ ./gen_test_case
```

#### Requirement
- BASH

### テストの実行方法

以下のコマンドをたたくとテストが実行されます。

```
$ cd sort_in_my_love
$ ./test
```

Requirement
- Shell(POSIX)
- 各コードのRequirement
