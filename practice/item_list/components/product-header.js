var productHeader = {
    template: `
    <header>
        <h1 class="pageTitle">商品一覧</h1>
            <!--検索欄-->
            <div class="search">
                <div class=result>
                    検索結果 <span class="count">{{count}}件</span>
                </div>
                <div class="condition">
                    <div class="target">
                        <label>
                            <input type="checkbox"
                                v-bind:checked="showSaleItem"
                                v-on:change="$emit('showSaleItemChanged')"
                                >セール対象</label>
                        <label>
                            <input type="checkbox"
                                v-bind:checked="showDelvFree"
                                v-on:change="$emit('showDelvFreeChanged')"
                                >送料無料</label>
                    </div>
                    <div class="sort">
                        <label for="sort">並び替え</label>
                        <select id="sort" class="sorting"
                                v-bind:value="showOrder"
                                v-on:change="$emit('sortOrderChanged',parseInt($event.target.value))"
                                >
                            <option value="1">標準</option>
                            <option value="2">価格が安い順</option>
                        </select>
                    </div>
            </div>
        </div>
        </header>`,
        props: ['count', 'showSaleItem', 'showDelvFree', 'sortOrder']
};