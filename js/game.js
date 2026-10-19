// game.js
const TRANSLATIONS = {
    ja: {
        title: "マインスイーパ",
        diff_easy: "初級 (9x9, 地雷10)",
        diff_normal: "中級 (16x16, 地雷40)",
        diff_hard: "上級 (30x16, 地雷99)",
        diff_timeattack: "タイムアタック (6x6, 地雷3)",
        diff_cube3d: "3Dキューブ",
        diff_custom: "カスタム",
        start: "スタート",
        help: "❓ ヘルプ",
        close: "閉じる",
        lives: "残りライフ",
        mines: "予測残り地雷数",
        safe: "残り安全マス数",
        time: "経過時間",
        hint_uses: "ヒント残り",
        lens_uses: "虫眼鏡残り",
        err_title: "エラー",
        err_no_mines: "地雷がない!",
        err_too_small: "タイル数が小さすぎる!",
        err_too_many_mines: "地雷数が大きすぎる!",
        err_no_hints: "ヒント切れ！",
        err_no_hints_found: "ヒントが見つかりません",
        err_no_lenses: "虫眼鏡切れ！",
        lbl_cube3d_size: "サイズ",
        lbl_cube3d_mines: "地雷数",
        win_title: "クリア！",
        win_best: "ベストタイム更新!",
        lose_title: "ゲームオーバー",
        lose_msg: "ライフがなくなりました！",
        help_title: "Minesweeper Help (ヘルプ)",
        help_basic_title: "基本ルール",
        help_basic_p1: "地雷以外のすべての安全なマスを開ければクリアです。地雷を踏むとライフ（最大3）が減少します。",
        help_basic_p2: "開いたマスに表示される数字は、そのマスの周囲8マスにある地雷の数を示しています。",
        help_status_title: "ステータス表示の見方",
        help_status_time: "⏱ 時間アイコンの数字： ゲーム開始からの経過時間（秒）です。",
        help_status_lives: "❤️ ハートアイコンの数字： 残りライフ（初期値3）です。0になるとゲームオーバーになります。",
        help_status_mines: "💣 地雷アイコンの数字： 盤面上の残りの地雷の数（予測）です。怪しいマスに旗（🚩）を立てるたびにカウントが減ります。",
        help_status_safe: "🔲 白ますアイコンの数字： 残りの安全マス数です。この数字を0にするとクリアです。",
        help_controls_title: "操作方法",
        help_controls_left: "左クリック： マスを開ける。",
        help_controls_right: "右クリック： マスに旗（🚩）を立てる / 外す。",
        help_controls_chord: "数字マスのクリック： 周囲にその数字と同じ数の旗が立っている場合、他のマスを一度に安全に開けます。",
        help_controls_hint: "💡 ヒントボタン（Spaceキー）： 確定マスと、その判断理由となる関係マスを黄色くハイライトします。",
        help_controls_lens: "🔍 虫眼鏡ボタン（Zキー）： 未開封マスを2秒間だけ透視します。",
        help_controls_drag: "ドラッグ移動： 盤面が画面より大きい場合、マウスでドラッグしてスクロール移動できます。",
        help_tips_title: 'パターンとコツ　（<span class="color-mine">赤:地雷</span>　<span class="color-unknown">黄:不明</span>　<span class="color-safe">緑:安全</span>）',
        tip_11_title: "1-1 パターン",
        tip_11_p: "隣り合う「1」が同じ2つの未開封マスを共有している場合、その2マスのどちらかに地雷が1つあります。そのため、どちらかの「1」が接している共有マス以外のすべてのマスは安全（地雷なし）です。",
        tip_12_title: "1-2 パターン (壁際での応用)",
        tip_12_p: "「1」と「2」が隣り合い、共通の未開封マス2つに接している場合、「1」の地雷は共通マス内にあるため、「2」のもう1つの地雷は共通マス以外の3番目のマスに必ず存在します。",
        tip_121_title: "1-2-1 パターン",
        tip_121_p: "「1 - 2 - 1」と並んでいる場合、両端の「1」の真下のマスには必ず地雷があり、中央の「2」の真下のマスは安全です。これは「1-2」パターンの左右からの組み合わせで説明できます。",
        tip_1221_title: "1-2-2-1 パターン",
        tip_1221_p: "「1 - 2 - 2 - 1」と並んでいる場合、中央の「2」の真下の2マスには必ず地雷があり、両端の「1」の真下のマスは安全です。",
        tip_corner1_title: "角の「1」 (基本中の基本)",
        tip_corner1_p: "角にある「1」のマスは、その周囲に未開封のマスが1つしかない場合、そこが必ず地雷です。",
        ta_title: "タイムアタック終了",
        ta_best: "ベストカウント更新!",
        lbl_survival: "サバイバル",
        help_extra_modes_title: "拡張モードのルール",
        help_mode_timeattack: "<div class=\"mode-card\">⏱ <strong>タイムアタック</strong><p>60秒の制限時間内に、できるだけ多くのマップをクリアします。素早く（3秒以内）クリアするとタイムボーナスが発生します。</p><ul><li>初期ライフ：5 (サバイバルモードON時は10)</li></ul></div>",
        help_mode_cube3d: "<div class=\"mode-card\">🧊 <strong>3Dキューブ</strong><p>立体キューブの表面でマインスイーパをプレイします。2Dと違って面ではなく、各ブロック（ボクセル）を単位として、隣接するブロックに潜む地雷数が計算されます。ドラッグで自由にキューブを回転させることができます（3Dモードでもヒントや虫眼鏡を使用可能）。</p><img src=\"cube-voxel-explanation.png\" alt=\"3D Cube Voxel Explanation\" style=\"width: 100%; max-width: 380px; display: block; margin: 0.75rem auto; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);\"><p style=\"margin-top: 0.75rem;\">この画像では、同色のマスはすべて同ブロック内にあり、黄色の2のブロックは緑色の旗ブロック及び青色の旗ブロックと接しています。同様にオレンジ色の3のブロック緑色、青色、紫色の3つの旗ブロックと接しています。</p></div>",
        help_mode_survival: "<div class=\"mode-card\">💀 <strong>サバイバル</strong><p>プレイ中、画面外から弾やレーザーが飛んできてプレイヤーを攻撃します。障害物を避けつつプレイします。</p><ul><li>初期ライフ：10</li><li><strong>直線弾 (青):</strong> 画面端から端まで直線に動きます。</li><li><strong>追尾弾 (赤):</strong> 最初はプレイヤーを追跡し、その後直線的に動きます。</li><li><strong>バウンド弾 (黄):</strong> 2回まで壁を跳ね返ります。</li><li><strong>レーザー銃弾 (マゼンタ):</strong> ロックオン警告の後に高速の弾が放たれます。</li></ul></div>"
    },
    en: {
        title: "Minesweeper",
        diff_easy: "Easy (9x9, 10 Mines)",
        diff_normal: "Normal (16x16, 40 Mines)",
        diff_hard: "Hard (30x16, 99 Mines)",
        diff_timeattack: "Time Attack (6x6, 3 Mines)",
        diff_cube3d: "3D Cube",
        diff_custom: "Custom",
        start: "Start",
        help: "❓ Help",
        close: "Close",
        lives: "Lives",
        mines: "Mines Left",
        safe: "Safe Tiles Left",
        time: "Time",
        hint_uses: "Hints",
        lens_uses: "Lenses",
        err_title: "Error",
        err_no_mines: "No mines!",
        err_too_small: "Board is too small!",
        err_too_many_mines: "Too many mines!",
        err_no_hints: "No hints left!",
        err_no_hints_found: "No hint found",
        err_no_lenses: "No lenses left!",
        lbl_cube3d_size: "Size",
        lbl_cube3d_mines: "Mines",
        win_title: "You Win!",
        win_best: "New Record!",
        lose_title: "Game Over",
        lose_msg: "You ran out of lives!",
        help_title: "Minesweeper Help",
        help_basic_title: "Basic Rules",
        help_basic_p1: "Clear all tiles without stepping on mines. Stepping on a mine reduces your lives (max 3).",
        help_basic_p2: "Numbers indicate the number of mines in the surrounding 8 tiles.",
        help_status_title: "Status Indicators",
        help_status_time: "⏱ Time elapsed in seconds.",
        help_status_lives: "❤️ Remaining lives (starts at 3). Game over if it reaches 0.",
        help_status_mines: "💣 Estimated remaining mines. Decreases when placing flags (🚩).",
        help_status_safe: "🔲 Remaining safe tiles to open. Clear the game by making this 0.",
        help_controls_title: "Controls",
        help_controls_left: "Left Click: Open a tile.",
        help_controls_right: "Right Click: Place/remove a flag (🚩).",
        help_controls_chord: "Click Number: Opens remaining tiles if neighbor flags match the number.",
        help_controls_hint: "💡 Hint Button (Space): Highlights the logical tile and its reasoning in yellow.",
        help_controls_lens: "🔍 Lens Button (Z): Look inside a closed tile for 2 seconds.",
        help_controls_drag: "Drag Scroll: Click and drag to scroll when the board is larger than screen.",
        help_tips_title: 'Patterns & Tips (<span class="color-mine">Red: Mine</span>, <span class="color-unknown">Yellow: Unknown</span>, <span class="color-safe">Green: Safe</span>)',
        tip_11_title: "1-1 Pattern",
        tip_11_p: "When two adjacent '1's share exactly two closed tiles, one of those tiles contains the mine. Any other closed tiles touching either '1' are safe.",
        tip_12_title: "1-2 Pattern (Wall technique)",
        tip_12_p: "When '1' and '2' are adjacent and share two closed tiles, the '1''s mine must be in the shared tiles, forcing the '2''s second mine to be in the third non-shared tile.",
        tip_121_title: "1-2-1 Pattern",
        tip_121_p: "When '1-2-1' is lined up, there are always mines under both '1's, and the tile under the center '2' is safe.",
        tip_1221_title: "1-2-2-1 Pattern",
        tip_1221_p: "When '1-2-2-1' is lined up, there are always mines under both '2's, and the tiles under the '1's are safe.",
        tip_corner1_title: "Corner '1' (The Basics)",
        tip_corner1_p: "A '1' in a corner with only one unopened neighbor must have a mine in that neighbor.",
        ta_title: "Time Attack Over",
        ta_best: "New Best Count!",
        lbl_survival: "Survival",
        help_extra_modes_title: "Extra Game Modes",
        help_mode_timeattack: "<div class=\"mode-card\">⏱ <strong>Time Attack</strong><p>Clear as many maps as possible within a 60-second limit. Clearing quickly (within 3s) grants a time bonus.</p><ul><li>Initial Lives: 5 (10 if Survival Mode is ON)</li></ul></div>",
        help_mode_cube3d: "<div class=\"mode-card\">🧊 <strong>3D Cube</strong><p>Play Minesweeper on the surface of a 3D cube. Unlike 2D, the board operates on a block (voxel) basis; numbers indicate the mines hidden in the surrounding blocks. Drag to rotate the cube freely (Hints and lenses are supported in 3D mode).</p><img src=\"cube-voxel-explanation.png\" alt=\"3D Cube Voxel Explanation\" style=\"width: 100%; max-width: 380px; display: block; margin: 0.75rem auto; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);\"><p style=\"margin-top: 0.75rem;\">In this picture, all faces with the same color corresponds to the same block. The yellow 2 Block is neighboring the green and blue flag blocks, hence it is numbered as two. In the same way, the orange 3 Block is neighboring the green, blue, and purple block, hence it is numbered as 3.</p></div>",
        help_mode_survival: "<div class=\"mode-card\">💀 <strong>Survival Mode</strong><p>Enemy bullets and lasers fly onto the screen during play. You must dodge attacks while clearing mines.</p><ul><li>Initial Lives: 10</li><li><strong>Linear Bullet (Blue):</strong> Travels in a straight line.</li><li><strong>Homing Bullet (Red):</strong> Tracks your pointer location. Goes in a straight path after a while.</li><li><strong>Bounce Bullet (Yellow):</strong> Bounces off twice on screen edges.</li><li><strong>Laser Bullet (Magenta):</strong> Fires a high speed bullet after lock-on warning.</li></ul></div>"
    }
};

class GameController {
    constructor() {
        this.boardElement = document.getElementById('board');
        this.boardContainer = document.getElementById('board-container');
        this.headerLangSelect = document.getElementById('header-lang-select');
        this.difficultySelect = document.getElementById('difficulty-select');
        this.customControls = document.getElementById('custom-controls');
        this.startBtn = document.getElementById('start-btn');

        // Status displays
        this.timerDisplay = document.getElementById('timer');
        this.mineDisplay = document.getElementById('mine-count');
        this.tileDisplay = document.getElementById('tile-count');
        this.lifeDisplay = document.getElementById('life-count');
        this.hintCountDisplay = document.getElementById('hint-count');
        this.lensCountDisplay = document.getElementById('lens-count');

        // Drag scrolling state
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.scrollLeft = 0;
        this.scrollTop = 0;
        this.preventClick = false;
        this.lensCountDisplay = document.getElementById('lens-count');

        // Modal and Menu
        this.overlay = document.getElementById('overlay');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMsg = document.getElementById('game-over-msg');
        this.modalActionBtn = document.getElementById('modal-action-btn');

        // Item Buttons
        this.hintBtn = document.getElementById('hint-btn');
        this.lensBtn = document.getElementById('lens-btn');

        // Theme and Help Elements
        this.headerThemeSelect = document.getElementById('header-theme-select');
        this.modalThemeSelect = document.getElementById('modal-theme-select');
        this.headerHelpBtn = document.getElementById('header-help-btn');
        this.modalHelpBtn = document.getElementById('modal-help-btn');
        this.modalCloseBtn = document.getElementById('modal-close-btn');
        this.helpModal = document.getElementById('help-modal');
        this.helpCloseBtn = document.getElementById('help-close-btn');

        this.tempStorage = {};

        // Survival Mode UI
        this.survivalCheck = document.getElementById('survival-check');
        this.survivalLevelSelect = document.getElementById('survival-level-select');
        if (this.survivalCheck) {
            this.survivalCheck.addEventListener('change', () => {
                if (this.survivalCheck.checked) {
                    this.survivalLevelSelect.classList.remove('hidden');
                } else {
                    this.survivalLevelSelect.classList.add('hidden');
                }
            });
        }

        // 3D Cube Mode UI
        this.cube3dCheck = null; // 難易度選択に統合したためチェックボックスは使用しません
        this.cube3dControls = document.getElementById('cube3d-controls');
        this.cube3dSizeInput = document.getElementById('cube3d-size');
        this.cube3dMinesInput = document.getElementById('cube3d-mines');
        this.cubeContainer = document.getElementById('cube-container');
        this.cubeElement = document.getElementById('cube');
        this.isCube3d = false;
        this.cubeSize = 5;
        this.cubeRotationX = -20;
        this.cubeRotationY = 30;



        // 3D Cube Rotation Drag Events
        let isDraggingCube = false;
        let prevMouseX = 0;
        let prevMouseY = 0;

        if (this.cubeContainer) {
            this.cubeContainer.addEventListener('mousedown', (e) => {
                if (this.isCube3d) {
                    isDraggingCube = true;
                    prevMouseX = e.clientX;
                    prevMouseY = e.clientY;
                }
            });

            window.addEventListener('mousemove', (e) => {
                if (isDraggingCube && this.isCube3d && this.cubeElement) {
                    const deltaX = e.clientX - prevMouseX;
                    const deltaY = e.clientY - prevMouseY;
                    prevMouseX = e.clientX;
                    prevMouseY = e.clientY;

                    if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
                        this.preventClick = true;
                    }

                    this.cubeRotationY += deltaX * 0.5;
                    this.cubeRotationX -= deltaY * 0.5;

                    this.cubeElement.style.transform = `rotateX(${this.cubeRotationX}deg) rotateY(${this.cubeRotationY}deg)`;
                }
            });

            window.addEventListener('mouseup', () => {
                isDraggingCube = false;
            });
        }
        this.bullets = [];
        this.lasers = [];
        this.survivalCursor = null; // カスタムカーソルは不使用
        this.isSurvival = false;
        this.survivalLevel = 1;
        this.isInvincible = false;
        this.invincibleTimeoutId = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.survivalAnimationId = null;

        // Audio initialization
        this.audioCtx = null;
        this.soundBtn = document.getElementById('header-sound-btn');
        const savedMute = this.safeGet('minesweeper-muted');
        this.isMuted = (savedMute === 'true');
        this.updateSoundButton();

        // Apply initial theme from localStorage (with validation)
        const savedTheme = this.safeGet('minesweeper-theme');
        this.theme = (savedTheme === 'modern' || savedTheme === 'retro') ? savedTheme : 'retro';
        this.applyTheme(this.theme);

        // Apply initial language from localStorage (with validation)
        const savedLang = this.safeGet('minesweeper-lang');
        this.lang = (savedLang === 'ja' || savedLang === 'en') ? savedLang : 'ja';
        if (this.headerLangSelect) this.headerLangSelect.value = this.lang;
        this.updateLanguage();

        this.difficulties = {
            easy: { width: 9, height: 9, mines: 10 },
            normal: { width: 16, height: 16, mines: 40 },
            hard: { width: 30, height: 16, mines: 99 },
            timeattack: { width: 6, height: 6, mines: 3 }
        };

        this.initEventListeners();
        this.startNewGame();
    }

    safeGet(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn("localStorage is not accessible, using memory fallback:", e);
            return this.tempStorage[key] || null;
        }
    }

    safeSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn("localStorage is not accessible, using memory fallback:", e);
            this.tempStorage[key] = value.toString();
        }
    }

    setLanguage(lang) {
        this.lang = lang;
        this.safeSet('minesweeper-lang', lang);
        this.updateLanguage();
    }

    updateLanguage() {
        const t = TRANSLATIONS[this.lang];
        if (!t) return;

        // 1. data-i18n を持つ要素をすべて翻訳
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        // 2. 特殊なラベルやテキストの個別設定
        this.startBtn.innerText = t.start;

        // 難易度オプションの更新
        Array.from(this.difficultySelect.options).forEach(opt => {
            if (opt.value === 'easy') opt.text = t.diff_easy;
            else if (opt.value === 'normal') opt.text = t.diff_normal;
            else if (opt.value === 'hard') opt.text = t.diff_hard;
            else if (opt.value === 'timeattack') opt.text = t.diff_timeattack;
            else if (opt.value === 'cube3d') opt.text = t.diff_cube3d;
            else if (opt.value === 'custom') opt.text = t.diff_custom;
        });

        // テーマオプションの更新
        if (this.headerThemeSelect) {
            this.headerThemeSelect.options[0].text = this.lang === 'ja' ? 'モダンテーマ' : 'Modern Theme';
            this.headerThemeSelect.options[1].text = this.lang === 'ja' ? 'レトロ8bit' : 'Retro 8-bit';
        }
        if (this.modalThemeSelect) {
            this.modalThemeSelect.options[0].text = this.lang === 'ja' ? 'モダンテーマ' : 'Modern Theme';
            this.modalThemeSelect.options[1].text = this.lang === 'ja' ? 'Retro 8-bit' : 'Retro 8-bit'; // modal-theme-select が index.html にあれば同期
        }

        // ヘルプボタンのテキスト更新
        if (this.headerHelpBtn) {
            this.headerHelpBtn.innerText = this.lang === 'ja' ? "❓ ヘルプ" : "❓ Help";
            this.headerHelpBtn.title = this.lang === 'ja' ? "ヘルプ" : "Help";
        }
        if (this.modalHelpBtn) {
            this.modalHelpBtn.innerText = this.lang === 'ja' ? "❓ ヘルプ" : "❓ Help";
            this.modalHelpBtn.title = this.lang === 'ja' ? "ヘルプ" : "Help";
        }
        if (this.modalCloseBtn) {
            this.modalCloseBtn.innerText = this.lang === 'ja' ? "❌ 閉じる" : "❌ Close";
            this.modalCloseBtn.title = this.lang === 'ja' ? "閉じる" : "Close";
        }

        // カスタム設定エリアの警告テキスト更新
        const customWarning = document.querySelector('.custom-warning');
        if (customWarning) {
            customWarning.innerText = this.lang === 'ja'
                ? "※タイル数を大きくしすぎるとゲームが重くなることがあるので注意！"
                : "* Setting too many tiles may cause performance issues!";
        }

        // カスタムインプットのラベルテキスト
        const customLabels = this.customControls.querySelectorAll('label');
        if (customLabels.length >= 3) {
            customLabels[0].childNodes[0].textContent = this.lang === 'ja' ? '幅: ' : 'Width: ';
            customLabels[1].childNodes[0].textContent = this.lang === 'ja' ? '高さ: ' : 'Height: ';
            customLabels[2].childNodes[0].textContent = this.lang === 'ja' ? '地雷数: ' : 'Mines: ';
        }

        // タイトル
        document.title = this.lang === 'ja' ? 'マインスイーパ: 論理パズル' : 'Minesweeper: The Logical Puzzle';
        const h1 = document.querySelector('header h1');
        if (h1) h1.innerText = t.title;

        // ステータス表示のツールチップ
        if (this.timerDisplay && this.timerDisplay.parentElement) this.timerDisplay.parentElement.title = t.time;
        if (this.mineDisplay && this.mineDisplay.parentElement) this.mineDisplay.parentElement.title = t.mines;
        const tileDisplay = document.getElementById('tile-count');
        if (tileDisplay && tileDisplay.parentElement) tileDisplay.parentElement.title = t.safe;

        const bestTimeDisplay = document.getElementById('best-time');
        if (bestTimeDisplay && bestTimeDisplay.parentElement) {
            bestTimeDisplay.parentElement.title = this.lang === 'ja' ? 'ベストタイム' : 'Best Time';
        }

        // アイテムのツールチップ
        if (this.hintBtn) this.hintBtn.title = t.help_controls_hint;
        if (this.lensBtn) this.lensBtn.title = t.help_controls_lens;
    }

    initEventListeners() {
        if (this.headerLangSelect) {
            this.headerLangSelect.addEventListener('change', (e) => this.setLanguage(e.target.value));
        }

        this.difficultySelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === 'custom') {
                this.customControls.classList.remove('hidden');
            } else {
                this.customControls.classList.add('hidden');
            }

            if (val === 'cube3d') {
                this.cube3dControls.classList.remove('hidden');
            } else {
                this.cube3dControls.classList.add('hidden');
            }
        });

        this.startBtn.addEventListener('click', () => this.startNewGame());

        this.modalActionBtn.addEventListener('click', () => {
            try {
                this.overlay.classList.add('hidden');
                if (this.modalActionBtn.innerText === "閉じる") {
                    return; // バリデーションエラー時はゲームを開始せず閉じるだけにする
                }
                this.startNewGame();
            } catch (e) {
                console.error(e);
                alert("エラーが発生しました。Ctrl+F5でページを再読み込みしてください。\n" + e.message);
            }
        });

        // Board interactions
        this.boardElement.addEventListener('click', (e) => this.handleLeftClick(e));
        this.boardElement.addEventListener('contextmenu', (e) => this.handleRightClick(e));

        // 3D Cube interactions
        if (this.cubeContainer) {
            this.cubeContainer.addEventListener('click', (e) => this.handleLeftClick(e));
            this.cubeContainer.addEventListener('contextmenu', (e) => this.handleRightClick(e));
        }

        // Drag Scrolling events
        this.boardContainer.addEventListener('mousedown', (e) => this.handleDragStart(e));
        this.boardContainer.addEventListener('mouseleave', () => this.handleDragEnd());
        this.boardContainer.addEventListener('mouseup', () => this.handleDragEnd());
        this.boardContainer.addEventListener('mousemove', (e) => this.handleDragMove(e));
        this.boardContainer.addEventListener('mousemove', (e) => {
            const currentContainer = this.isCube3d ? this.cubeContainer : this.boardElement;
            const rect = currentContainer.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;

            // カスタムカーソルは不使用（標準カーソルを使用）
        });

        // Item usage
        this.lensBtn.addEventListener('click', () => this.toggleLensMode());
        this.hintBtn.addEventListener('click', () => this.useHint());

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.useHint();
            } else if (e.code === 'KeyZ') {
                e.preventDefault();
                this.toggleLensMode();
            }
        });

        // Global context menu prevention for game area
        this.boardContainer.addEventListener('contextmenu', e => e.preventDefault());

        if (this.soundBtn) {
            this.soundBtn.addEventListener('click', () => this.toggleMute());
        }

        // Theme selection synchronization and application
        this.headerThemeSelect.addEventListener('change', (e) => this.setTheme(e.target.value));

        // Help button triggers
        this.headerHelpBtn.addEventListener('click', () => this.showHelp());
        this.modalHelpBtn.addEventListener('click', () => this.showHelp());
        if (this.modalCloseBtn) {
            this.modalCloseBtn.addEventListener('click', () => this.overlay.classList.add('hidden'));
        }
        this.helpCloseBtn.addEventListener('click', () => this.hideHelp());
        this.helpModal.addEventListener('click', (e) => {
            if (e.target === this.helpModal) this.hideHelp();
        });

    }

    showStartMenu() {
        const t = TRANSLATIONS[this.lang];
        this.overlay.classList.remove('hidden');
        this.modalTitle.innerText = t ? t.title : "Minesweeper";
        this.modalTitle.style.color = "var(--text-primary)";
        this.modalMsg.innerText = this.lang === 'ja' ? "難易度を選択してスタートしてください！" : "Choose your difficulty and start!";
        this.modalActionBtn.innerText = this.lang === 'ja' ? "ゲーム開始" : "Start Game";
        if (this.modalHelpBtn) {
            this.modalHelpBtn.classList.remove('hidden');
            this.modalHelpBtn.style.display = 'block';
        }
        if (this.modalCloseBtn) this.modalCloseBtn.classList.add('hidden');
    }

    startNewGame() {
        // Ensure modal overlay is closed
        this.overlay.classList.add('hidden');

        const diff = this.difficultySelect ? this.difficultySelect.value : 'easy';
        this.currentDifficulty = diff;

        this.isCube3d = (diff === 'cube3d');

        if (this.isCube3d) {
            this.cubeSize = parseInt(this.cube3dSizeInput.value) || 5;
            this.cubeSize = Math.max(3, this.cubeSize);
            this.minesCount = parseInt(this.cube3dMinesInput.value) || 20;
            this.width = this.cubeSize;
            this.height = this.cubeSize;

            const n = this.cubeSize;
            const totalTiles = n * n * n - (n - 2) * (n - 2) * (n - 2);
            const t = TRANSLATIONS[this.lang];

            if (this.minesCount <= 0) {
                this.showToast(t.err_no_mines);
                return;
            }
            if (this.minesCount > totalTiles - 2) {
                this.showToast(t.err_too_many_mines);
                return;
            }
        } else {
            // Read settings from header
            if (diff === 'custom') {
                const w = document.getElementById('custom-width').value;
                const h = document.getElementById('custom-height').value;
                const m = document.getElementById('custom-mines').value;

                this.width = parseInt(w);
                this.height = parseInt(h);
                this.minesCount = parseInt(m);
            } else {
                this.width = this.difficulties[diff].width;
                this.height = this.difficulties[diff].height;
                this.minesCount = this.difficulties[diff].mines;
            }

            const t = TRANSLATIONS[this.lang];
            // バリデーションチェック1: 地雷数が0
            if (this.minesCount <= 0) {
                this.showToast(t.err_no_mines);
                return;
            }

            // バリデーションチェック2: タイル数が3以下
            if (this.width * this.height <= 3) {
                this.showToast(t.err_too_small);
                return;
            }

            // バリデーションチェック3: 地雷数が (マス合計 - 2) より大きかったら開始せずエラー表示
            const maxAllowedMines = (this.width * this.height) - 2;
            if (this.minesCount > maxAllowedMines) {
                this.showToast(t.err_too_many_mines);
                return;
            }
        }

        this.isTimeAttack = (diff === 'timeattack');
        const clearCountContainer = document.getElementById('clear-count-container');
        if (this.isTimeAttack) {
            this.clearCount = 0;
            this.timeElapsed = 60;
            this.fastClearCombo = 0;
            if (clearCountContainer) clearCountContainer.classList.remove('hidden');
        } else {
            this.timeElapsed = 0;
            this.fastClearCombo = 0;
            if (clearCountContainer) clearCountContainer.classList.add('hidden');
        }

        // 新しい設定が確定した後にベストタイムをロード（表示ラグの解消）
        if (this.isCube3d) {
            this.loadBestTime('cube3d');
        } else {
            this.loadBestTime(diff);
        }

        // Reset state
        this.isFirstClick = true;
        this.gameOver = false;
        this.flagsPlaced = 0;
        this.tilesRevealed = 0;
        this.explodedMines = 0;

        if (this.isCube3d) {
            this.initCubeCoordinates();
            this.board = [];
            this.voxelMap = new Map();
            const N = this.cubeSize;
            for (let face = 0; face < 6; face++) {
                const faceGrid = [];
                for (let y = 0; y < N; y++) {
                    const row = [];
                    for (let x = 0; x < N; x++) {
                        let i = 0, j = 0, k = 0;
                        if (face === 0) {
                            i = x; j = y; k = N - 1;
                        } else if (face === 1) {
                            i = N - 1 - x; j = y; k = 0;
                        } else if (face === 2) {
                            i = x; j = 0; k = y;
                        } else if (face === 3) {
                            i = x; j = N - 1; k = N - 1 - y;
                        } else if (face === 4) {
                            i = 0; j = y; k = x;
                        } else if (face === 5) {
                            i = N - 1; j = y; k = N - 1 - x;
                        }

                        const tile = {
                            face,
                            x,
                            y,
                            i,
                            j,
                            k,
                            isMine: false,
                            isOpen: false,
                            isFlagged: false,
                            neighborMines: 0
                        };
                        row.push(tile);

                        const key = `${i},${j},${k}`;
                        if (!this.voxelMap.has(key)) {
                            this.voxelMap.set(key, []);
                        }
                        this.voxelMap.get(key).push(tile);
                    }
                    faceGrid.push(row);
                }
                this.board.push(faceGrid);
            }
        } else {
            this.board = [];
            for (let y = 0; y < this.height; y++) {
                const row = [];
                for (let x = 0; x < this.width; x++) {
                    row.push({
                        x,
                        y,
                        isMine: false,
                        isOpen: false,
                        isFlagged: false,
                        neighborMines: 0
                    });
                }
                this.board.push(row);
            }
        }

        // Original Elements State
        const checkSurvival = this.survivalCheck ? this.survivalCheck.checked : false;
        this.lives = checkSurvival ? 10 : (this.isTimeAttack ? 5 : 3);
        this.hintUses = 3;
        this.lensUses = 3;
        this.lensModeActive = false;
        document.body.classList.remove('lens-mode');
        this.lensBtn.classList.remove('active');
        // 3Dモード時でもヒントと虫眼鏡を使用可能に
        if (this.lensBtn) this.lensBtn.classList.remove('hidden');
        if (this.hintBtn) this.hintBtn.classList.remove('hidden');

        // Timer
        clearInterval(this.timerInterval);
        this.timerInterval = null;

        // Survival Mode Reset
        this.clearSurvivalBullets();
        this.clearSurvivalLasers();
        this.isSurvival = this.survivalCheck ? this.survivalCheck.checked : false;
        this.survivalLevel = this.survivalLevelSelect ? parseInt(this.survivalLevelSelect.value) : 1;
        this.isInvincible = false;
        if (this.invincibleTimeoutId) {
            clearTimeout(this.invincibleTimeoutId);
            this.invincibleTimeoutId = null;
        }
        if (this.boardElement) {
            this.boardElement.classList.remove('invincible-blink');
        }
        // カスタムカーソルは不使用（標準カーソルのまま）
        if (this.survivalAnimationId) {
            cancelAnimationFrame(this.survivalAnimationId);
            this.survivalAnimationId = null;
        }

        this.updateDisplays();
        this.renderBoard();
    }

    countSurfaceMines() {
        // Count unique surface voxels that are mines
        const surfaceMines = new Set();
        for (let face = 0; face < 6; face++) {
            for (let y = 0; y < this.cubeSize; y++) {
                for (let x = 0; x < this.cubeSize; x++) {
                    const tile = this.board[face][y][x];
                    if (tile.isMine) {
                        // Check if the block is on the surface (exposed)
                        const isExposed = tile.i === 0 || tile.i === this.cubeSize - 1 ||
                            tile.j === 0 || tile.j === this.cubeSize - 1 ||
                            tile.k === 0 || tile.k === this.cubeSize - 1;

                        if (isExposed) {
                            const key = `${tile.i},${tile.j},${tile.k}`;
                            surfaceMines.add(key);
                        }
                    }
                }
            }
        }
        return surfaceMines.size;
    }

    countUniqueOpenSafeBlocks() {
        // Count unique voxels that are opened, not mines, and exposed (on surface, not internal)
        const openVoxels = new Set();
        for (let face = 0; face < 6; face++) {
            for (let y = 0; y < this.cubeSize; y++) {
                for (let x = 0; x < this.cubeSize; x++) {
                    const tile = this.board[face][y][x];
                    if (tile.isOpen && !tile.isMine) {
                        // Check if the block is on the surface (exposed)
                        // A block is exposed if at least one coordinate is on the edge
                        const isExposed = tile.i === 0 || tile.i === this.cubeSize - 1 ||
                            tile.j === 0 || tile.j === this.cubeSize - 1 ||
                            tile.k === 0 || tile.k === this.cubeSize - 1;

                        if (isExposed) {
                            const key = `${tile.i},${tile.j},${tile.k}`;
                            openVoxels.add(key);
                        }
                    }
                }
            }
        }
        return openVoxels.size;
    }

    updateDisplays() {
        const m = Math.floor(this.timeElapsed / 60).toString().padStart(2, '0');
        const s = (this.timeElapsed % 60).toString().padStart(2, '0');
        this.timerDisplay.innerText = `${m}:${s}`;

        this.mineDisplay.innerText = this.minesCount - this.flagsPlaced - this.explodedMines;

        if (this.isCube3d) {
            // In 3D mode, display exposed surface block counts
            // Surface blocks = n^3 - (n-2)^3 where n = cubeSize
            const n = this.cubeSize;
            const totalSurfaceBlocks = n * n * n - (n - 2) * (n - 2) * (n - 2);
            const openSafeBlocks = this.countUniqueOpenSafeBlocks();
            const remBlocks = totalSurfaceBlocks - this.minesCount - openSafeBlocks;
            this.tileDisplay.innerText = remBlocks > 0 ? remBlocks : 0;
        } else {
            // In 2D mode, display face/tile counts
            const totalSafeTiles = (this.width * this.height) - this.minesCount;
            const remTiles = totalSafeTiles - this.tilesRevealed;
            this.tileDisplay.innerText = remTiles > 0 ? remTiles : 0;
        }

        this.lifeDisplay.innerText = this.lives;
        this.hintCountDisplay.innerText = this.hintUses;
        this.lensCountDisplay.innerText = this.lensUses;

        const clearCountDisplay = document.getElementById('clear-count');
        if (clearCountDisplay) {
            clearCountDisplay.innerText = this.isTimeAttack ? this.clearCount : 0;
        }
    }

    startTimer() {
        if (!this.timerInterval) {
            this.timerInterval = setInterval(() => {
                if (this.isTimeAttack) {
                    this.timeElapsed--;
                    if (this.timeElapsed <= 0) {
                        this.timeElapsed = 0;
                        clearInterval(this.timerInterval);
                        this.timerInterval = null;
                        this.triggerGameOver(false);
                    }
                } else {
                    this.timeElapsed++;
                    if (this.timeElapsed > 999) this.timeElapsed = 999;
                }
                this.updateDisplays();
            }, 1000);
        }
        if (this.isSurvival && !this.survivalAnimationId) {
            this.startSurvivalLoop();
        }
    }

    renderBoard() {
        if (this.isCube3d) {
            this.boardElement.classList.add('hidden');
            if (this.cubeContainer) this.cubeContainer.classList.remove('hidden');
            this.renderCube();
            return;
        } else {
            if (this.cubeContainer) this.cubeContainer.classList.add('hidden');
            this.boardElement.classList.remove('hidden');
        }

        this.boardElement.innerHTML = '';
        this.boardElement.style.gridTemplateColumns = `repeat(${this.width}, 30px)`;
        this.boardElement.style.gridTemplateRows = `repeat(${this.height}, 30px)`;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const tileObj = this.board[y][x];
                tileObj.element = document.createElement('div');
                tileObj.element.classList.add('tile');
                tileObj.element.dataset.x = x;
                tileObj.element.dataset.y = y;

                this.boardElement.appendChild(tileObj.element);
            }
        }
    }

    placeMines(firstClickX, firstClickY) {
        let placed = 0;
        while (placed < this.minesCount) {
            const rx = Math.floor(Math.random() * this.width);
            const ry = Math.floor(Math.random() * this.height);

            // 初手セーフティ: 最初のクリック位置には配置しない
            if (rx === firstClickX && ry === firstClickY) continue;

            if (!this.board[ry][rx].isMine) {
                this.board[ry][rx].isMine = true;
                placed++;
            }
        }
        this.calculateNeighbors();
    }

    calculateNeighbors() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.board[y][x].isMine) continue;
                let count = 0;
                this.getNeighbors(x, y).forEach(n => {
                    if (n.isMine) count++;
                });
                this.board[y][x].neighborMines = count;
            }
        }
    }

    getNeighbors(x, y) {
        const neighbors = [];
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
                    neighbors.push(this.board[ny][nx]);
                }
            }
        }
        return neighbors;
    }

    handleDragStart(e) {
        if (this.isCube3d) return;
        if (e.button !== 0) return; // Only left click
        this.isDragging = true;
        this.preventClick = false;
        this.dragStartX = e.pageX;
        this.dragStartY = e.pageY;
        this.scrollLeft = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
        this.scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    }

    handleDragEnd() {
        this.isDragging = false;
    }

    handleDragMove(e) {
        if (this.isCube3d || !this.isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const y = e.pageY;
        const walkX = x - this.dragStartX;
        const walkY = y - this.dragStartY;

        if (Math.abs(walkX) > 5 || Math.abs(walkY) > 5) {
            this.preventClick = true;
        }

        window.scrollTo(this.scrollLeft - walkX, this.scrollTop - walkY);
    }

    handleLeftClick(e) {
        if (this.preventClick) {
            this.preventClick = false;
            return;
        }
        if (this.gameOver) return;
        const target = e.target;
        if (!target.classList.contains('tile')) return;

        const face = target.dataset.face !== undefined ? parseInt(target.dataset.face) : null;
        const x = parseInt(target.dataset.x);
        const y = parseInt(target.dataset.y);
        const tile = face !== null ? this.board[face][y][x] : this.board[y][x];

        // 虫眼鏡モード
        if (this.lensModeActive) {
            this.useLensOn(tile);
            return;
        }

        if (tile.isFlagged) return;

        // 初回クリック
        if (this.isFirstClick) {
            this.isFirstClick = false;
            if (this.isCube3d) {
                this.placeMines3D(face, x, y);
            } else {
                this.placeMines(x, y);
            }
            this.startTimer();
            if (this.isTimeAttack) {
                this.mapStartTimerValue = this.timeElapsed;
            }
        }

        // すでに開いているタイルの場合、コード（一括オープン）機能を発動
        if (tile.isOpen && tile.neighborMines > 0) {
            this.chordReveal(tile);
            this.playClickSound();
            return;
        }

        if (!tile.isOpen) {
            if (!tile.isMine) {
                this.playClickSound();
            }
            this.revealTile(tile);
            this.checkWinCondition();
        }

        this.clearHintHighlight();
    }

    handleRightClick(e) {
        e.preventDefault();
        if (this.preventClick) {
            this.preventClick = false;
            return;
        }
        if (this.gameOver) return;

        // 虫眼鏡モードのキャンセル
        if (this.lensModeActive) {
            this.toggleLensMode();
            return;
        }

        const target = e.target;
        if (!target.classList.contains('tile')) return;

        const face = target.dataset.face !== undefined ? parseInt(target.dataset.face) : null;
        const x = parseInt(target.dataset.x);
        const y = parseInt(target.dataset.y);
        const tile = face !== null ? this.board[face][y][x] : this.board[y][x];

        if (tile.isOpen) return;

        const key = this.isCube3d ? `${tile.i},${tile.j},${tile.k}` : null;
        const sameVoxelTiles = this.isCube3d ? this.voxelMap.get(key) : [tile];
        const targetFlaggedState = !tile.isFlagged;

        sameVoxelTiles.forEach(t => {
            t.isFlagged = targetFlaggedState;
            const el = t.element;
            if (el) {
                if (targetFlaggedState) {
                    el.classList.add('flagged');
                    el.innerText = '🚩';
                } else {
                    el.classList.remove('flagged');
                    el.innerText = '';
                }
            }
        });

        if (targetFlaggedState) {
            this.flagsPlaced++;
        } else {
            this.flagsPlaced--;
        }

        this.playFlagSound();
        this.updateDisplays();
        this.clearHintHighlight();
    }

    revealTile(tile) {
        if (tile.isOpen || tile.isFlagged) return;

        const sameVoxelTiles = this.isCube3d
            ? this.voxelMap.get(`${tile.i},${tile.j},${tile.k}`)
            : [tile];

        const tilesToReveal = sameVoxelTiles.filter(t => !t.isOpen && !t.isFlagged);
        if (tilesToReveal.length === 0) return;

        if (tile.lensTimeoutId) {
            clearTimeout(tile.lensTimeoutId);
            tile.lensTimeoutId = null;
            if (tile.element) tile.element.style.backgroundColor = '';
        }

        let isMineHit = false;
        tilesToReveal.forEach(t => {
            t.isOpen = true;
            t.element.classList.add('open');
            if (t.isMine) {
                isMineHit = true;
                t.element.classList.add('mine');
                t.element.innerText = '💣';
            }
        });

        if (isMineHit) {
            this.lives--;
            this.explodedMines++;
            this.updateDisplays();
            this.playExplosionSound();

            if (this.lives <= 0) {
                this.triggerGameOver(false);
            }
            return;
        }

        this.tilesRevealed += tilesToReveal.length;

        const firstT = tilesToReveal[0];
        if (firstT.neighborMines > 0) {
            tilesToReveal.forEach(t => {
                t.element.innerText = t.neighborMines;
                t.element.classList.add(`val-${t.neighborMines}`);
            });
        }

        if (firstT.neighborMines === 0) {
            const queue = [firstT];
            const visitedVoxels = new Set();
            visitedVoxels.add(`${firstT.i},${firstT.j},${firstT.k}`);

            while (queue.length > 0) {
                const current = queue.shift();
                const neighbors = this.isCube3d
                    ? this.getNeighbors3D(current.face, current.x, current.y)
                    : this.getNeighbors(current.x, current.y);

                neighbors.forEach(n => {
                    const voxelKey = this.isCube3d ? `${n.i},${n.j},${n.k}` : `${n.x},${n.y}`;
                    if (visitedVoxels.has(voxelKey)) return;

                    const sameVoxels = this.isCube3d
                        ? this.voxelMap.get(voxelKey)
                        : [n];

                    const unrevealed = sameVoxels.filter(t => !t.isOpen && !t.isFlagged && !t.isMine);
                    if (unrevealed.length > 0) {
                        unrevealed.forEach(t => {
                            t.isOpen = true;
                            t.element.classList.add('open');
                            this.tilesRevealed++;
                            if (t.neighborMines > 0) {
                                t.element.innerText = t.neighborMines;
                                t.element.classList.add(`val-${t.neighborMines}`);
                            }
                        });
                        visitedVoxels.add(voxelKey);
                        if (unrevealed[0].neighborMines === 0) {
                            queue.push(unrevealed[0]);
                        }
                    }
                });
            }
        }
    }

    chordReveal(tile) {
        const neighbors = this.isCube3d
            ? this.getNeighbors3D(tile.face, tile.x, tile.y)
            : this.getNeighbors(tile.x, tile.y);
        const flagCount = neighbors.filter(n => n.isFlagged).length;
        const explodedCount = neighbors.filter(n => n.isOpen && n.isMine).length;

        if (flagCount + explodedCount === tile.neighborMines) {
            neighbors.forEach(n => {
                if (!n.isOpen && !n.isFlagged) {
                    this.revealTile(n);
                }
            });
            this.checkWinCondition();
        }
    }

    checkWinCondition() {
        let safeOpened = 0;
        let totalSafeTiles = 0;

        if (this.isCube3d) {
            // Count unique safe surface blocks opened
            // Surface blocks = n^3 - (n-2)^3 where n = cubeSize
            const n = this.cubeSize;
            const totalSurfaceBlocks = n * n * n - (n - 2) * (n - 2) * (n - 2);
            totalSafeTiles = totalSurfaceBlocks - this.minesCount;
            safeOpened = this.countUniqueOpenSafeBlocks();
        } else {
            // Count safe tiles opened
            totalSafeTiles = (this.width * this.height) - this.minesCount;
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    if (this.board[y][x].isOpen && !this.board[y][x].isMine) {
                        safeOpened++;
                    }
                }
            }
        }

        if (safeOpened === totalSafeTiles && this.lives > 0) {
            if (this.isTimeAttack) {
                this.clearCount++;
                const timeTaken = this.mapStartTimerValue - this.timeElapsed;
                if (timeTaken <= 3) {
                    this.fastClearCombo++;
                    const bonusSeconds = Math.min(5, 1 + this.fastClearCombo);
                    this.timeElapsed += bonusSeconds;
                    this.showTimeBonusIndicator(bonusSeconds);
                    this.playComboSound(this.fastClearCombo);
                } else {
                    this.fastClearCombo = 0;
                }
                this.startNextTimeAttackMap();
            } else {
                this.triggerGameOver(true);
            }
        }
    }

    showTimeBonusIndicator(seconds) {
        if (!this.timerDisplay || !this.timerDisplay.parentElement) return;
        const parent = this.timerDisplay.parentElement;

        const popup = document.createElement('span');
        popup.className = 'time-bonus-popup';
        popup.innerText = `+${seconds}`;
        parent.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 1000);
    }

    startNextTimeAttackMap() {
        this.isFirstClick = true;
        this.flagsPlaced = 0;
        this.tilesRevealed = 0;
        this.explodedMines = 0;

        if (this.isCube3d) {
            this.initCubeCoordinates();
            this.board = [];
            this.voxelMap = new Map();
            const N = this.cubeSize;
            for (let face = 0; face < 6; face++) {
                const faceGrid = [];
                for (let y = 0; y < N; y++) {
                    const row = [];
                    for (let x = 0; x < N; x++) {
                        let i = 0, j = 0, k = 0;
                        if (face === 0) {
                            i = x; j = y; k = N - 1;
                        } else if (face === 1) {
                            i = N - 1 - x; j = y; k = 0;
                        } else if (face === 2) {
                            i = x; j = 0; k = y;
                        } else if (face === 3) {
                            i = x; j = N - 1; k = N - 1 - y;
                        } else if (face === 4) {
                            i = 0; j = y; k = x;
                        } else if (face === 5) {
                            i = N - 1; j = y; k = N - 1 - x;
                        }

                        const tile = {
                            face,
                            x,
                            y,
                            i,
                            j,
                            k,
                            isMine: false,
                            isOpen: false,
                            isFlagged: false,
                            neighborMines: 0
                        };
                        row.push(tile);

                        const key = `${i},${j},${k}`;
                        if (!this.voxelMap.has(key)) {
                            this.voxelMap.set(key, []);
                        }
                        this.voxelMap.get(key).push(tile);
                    }
                    faceGrid.push(row);
                }
                this.board.push(faceGrid);
            }
        } else {
            this.board = [];
            for (let y = 0; y < this.height; y++) {
                const row = [];
                for (let x = 0; x < this.width; x++) {
                    row.push({
                        x,
                        y,
                        isMine: false,
                        isOpen: false,
                        isFlagged: false,
                        neighborMines: 0
                    });
                }
                this.board.push(row);
            }
        }

        this.updateDisplays();
        this.renderBoard();
    }

    triggerGameOver(isWin) {
        this.gameOver = true;
        clearInterval(this.timerInterval);
        this.updateDisplays();

        // Stop survival mode
        if (this.survivalAnimationId) {
            cancelAnimationFrame(this.survivalAnimationId);
            this.survivalAnimationId = null;
        }
        this.clearSurvivalBullets();
        this.clearSurvivalLasers();
        if (this.boardElement) {
            this.boardElement.classList.remove('invincible-blink');
        }
        // カスタムカーソルは不使用

        // 全ての地雷を表示
        if (this.isCube3d) {
            for (let face = 0; face < 6; face++) {
                for (let y = 0; y < this.cubeSize; y++) {
                    for (let x = 0; x < this.cubeSize; x++) {
                        const t = this.board[face][y][x];
                        if (t.isMine && !t.isOpen) {
                            t.isOpen = true;
                            t.element.classList.add('open');
                            if (!t.isFlagged) {
                                t.element.classList.add('mine');
                                t.element.innerText = '💣';
                            }
                        } else if (!t.isMine && t.isFlagged) {
                            t.element.innerText = '❌';
                        }
                    }
                }
            }
        } else {
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    const t = this.board[y][x];
                    if (t.isMine && !t.isOpen) {
                        t.element.classList.add('open');
                        if (!t.isFlagged) {
                            t.element.classList.add('mine');
                            t.element.innerText = '💣';
                        }
                    } else if (!t.isMine && t.isFlagged) {
                        // 間違った旗
                        t.element.innerText = '❌';
                    }
                }
            }
        }

        const t = TRANSLATIONS[this.lang];

        if (this.isTimeAttack) {
            this.modalTitle.innerText = t.ta_title;
            this.modalTitle.className = '';
            this.modalTitle.classList.add('lose-title');

            const key = `timeattack-${this.width}x${this.height}-${this.minesCount}`;
            const currentBestRaw = this.safeGet(`minesweeper-best-${key}`);
            const currentBest = currentBestRaw ? parseInt(currentBestRaw) : 0;
            const isNewBest = this.clearCount > currentBest;
            const bestCount = isNewBest ? this.clearCount : currentBest;

            if (isNewBest) {
                this.safeSet(`minesweeper-best-${key}`, this.clearCount);
                // 画面上のベストタイム（👑）の表示も即時更新
                const bestTimeDisplay = document.getElementById('best-time');
                if (bestTimeDisplay) bestTimeDisplay.innerText = bestCount;
            }

            this.modalMsg.innerHTML = this.lang === 'ja'
                ? `クリア数: <span style="font-weight:bold; font-size:1.5rem; color:var(--color-2);">${this.clearCount}</span> 個<br>ベストクリア数: <span style="font-weight:bold; font-size:1.5rem; color:var(--color-5);">${bestCount}</span> 個${isNewBest ? `<br><span class="win-title" style="font-weight:bold;">${t.ta_best}</span>` : ''}`
                : `Cleared: <span style="font-weight:bold; font-size:1.5rem; color:var(--color-2);">${this.clearCount}</span><br>Best Cleared: <span style="font-weight:bold; font-size:1.5rem; color:var(--color-5);">${bestCount}</span>${isNewBest ? `<br><span class="win-title" style="font-weight:bold;">${t.ta_best}</span>` : ''}`;

            this.modalActionBtn.innerText = this.lang === 'ja' ? 'もう一度' : 'Try Again';
        } else {
            this.modalTitle.innerText = isWin ? t.win_title : t.lose_title;

            // クラスのリセットと設定 (CSSでの見やすさ制御用)
            this.modalTitle.className = '';
            this.modalTitle.classList.add(isWin ? 'win-title' : 'lose-title');

            if (isWin) {
                const diff = this.currentDifficulty;
                let bestTimeMsg = "";
                // customモードでも、同じタイルの数・地雷数の条件であればキーを特定してベストタイムを記録
                const key = diff === 'custom' ? `custom-${this.width}x${this.height}-${this.minesCount}` : diff;

                const currentBest = this.safeGet(`minesweeper-best-${key}`);
                const isNewBest = !currentBest || this.timeElapsed < parseInt(currentBest);
                const bestSec = isNewBest ? this.timeElapsed : parseInt(currentBest);

                const bm = Math.floor(bestSec / 60).toString().padStart(2, '0');
                const bs = (bestSec % 60).toString().padStart(2, '0');
                const formattedBest = `${bm}:${bs}`;

                if (isNewBest) {
                    this.safeSet(`minesweeper-best-${key}`, this.timeElapsed);
                    bestTimeMsg = `<br><span class="win-title" style="font-weight:bold;">${t.win_best}</span>`;

                    // 画面上のベストタイム（👑）の表示も即時更新
                    const bestTimeDisplay = document.getElementById('best-time');
                    if (bestTimeDisplay) bestTimeDisplay.innerText = formattedBest;
                } else {
                    bestTimeMsg = "";
                }

                this.modalMsg.innerHTML = this.lang === 'ja'
                    ? `クリア時間: <span style="font-weight:bold; font-size:1.5rem; color:var(--color-2);">${this.timeElapsed}</span> 秒${bestTimeMsg}`
                    : `Time: <span style="font-weight:bold; font-size:1.5rem; color:var(--color-2);">${this.timeElapsed}</span> seconds${bestTimeMsg}`;
            } else {
                this.modalMsg.innerText = t.lose_msg;
            }

            this.modalActionBtn.innerText = this.lang === 'ja' ? 'もう一度' : 'Try Again';
        }

        if (this.modalHelpBtn) {
            this.modalHelpBtn.classList.add('hidden');
            this.modalHelpBtn.style.display = 'none';
        }
        if (this.modalCloseBtn) {
            this.modalCloseBtn.innerText = this.lang === 'ja' ? "❌ 閉じる" : "❌ Close";
            this.modalCloseBtn.classList.remove('hidden');
            this.modalCloseBtn.style.display = 'block';
        }

        this.overlay.classList.remove('hidden');
    }

    useHint() {
        if (this.gameOver || this.isFirstClick) return;
        if (this.hintUses <= 0) {
            const t = TRANSLATIONS[this.lang];
            this.showToast(t.err_no_hints);
            return;
        }

        this.clearHintHighlight();

        let logicalSets = []; // { causeTiles: [], targetTiles: [], relationTiles: [] } の配列

        if (this.isCube3d) {
            const N = this.cubeSize;
            // キャッシュ構造を 3D 用に構築
            const remMinesMap = {};
            const unopenedMap = {};

            for (let face = 0; face < 6; face++) {
                for (let y = 0; y < N; y++) {
                    for (let x = 0; x < N; x++) {
                        const tile = this.board[face][y][x];
                        if (tile.isOpen && tile.neighborMines > 0) {
                            const neighbors = this.getNeighbors3D(face, x, y);
                            const hidden = neighbors.filter(n => !n.isOpen && !n.isFlagged);
                            const flagged = neighbors.filter(n => n.isFlagged);
                            const key = `${face},${x},${y}`;
                            remMinesMap[key] = tile.neighborMines - flagged.length;
                            unopenedMap[key] = hidden;
                        }
                    }
                }
            }

            // B1, B2 パターン判定
            for (let face = 0; face < 6; face++) {
                for (let y = 0; y < N; y++) {
                    for (let x = 0; x < N; x++) {
                        const tile = this.board[face][y][x];
                        if (!tile.isOpen || tile.neighborMines === 0) continue;

                        const key = `${face},${x},${y}`;
                        const hidden = unopenedMap[key];
                        const rem = remMinesMap[key];
                        const neighbors = this.getNeighbors3D(face, x, y);
                        const flagged = neighbors.filter(n => n.isFlagged);

                        if (hidden && hidden.length > 0) {
                            // B1: 未開封マス数 == 残り地雷数 (すべて地雷確定)
                            if (hidden.length === rem) {
                                logicalSets.push({
                                    causeTiles: [tile],
                                    targetTiles: hidden,
                                    relationTiles: [...flagged]
                                });
                            }
                            // B2: 残り地雷数 == 0 (すべて安全確定)
                            if (rem === 0) {
                                logicalSets.push({
                                    causeTiles: [tile],
                                    targetTiles: hidden,
                                    relationTiles: [...flagged]
                                });
                            }
                        }
                    }
                }
            }
        } else {
            // 実質地雷数と未開封・旗なし隣接マスのキャッシュを作成
            const remMinesMap = Array(this.height).fill(null).map(() => Array(this.width).fill(0));
            const unopenedMap = Array(this.height).fill(null).map(() => Array(this.width).fill(null));

            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    const tile = this.board[y][x];
                    if (tile.isOpen && tile.neighborMines > 0) {
                        const neighbors = this.getNeighbors(x, y);
                        const hidden = neighbors.filter(n => !n.isOpen && !n.isFlagged);
                        const flagged = neighbors.filter(n => n.isFlagged);
                        remMinesMap[y][x] = tile.neighborMines - flagged.length;
                        unopenedMap[y][x] = hidden;
                    }
                }
            }

            // --- パターン検出 (2D) ---

            // 1. 基本判定 (B1, B2)
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    const tile = this.board[y][x];
                    if (!tile.isOpen || tile.neighborMines === 0) continue;

                    const hidden = unopenedMap[y][x];
                    const rem = remMinesMap[y][x];
                    const neighbors = this.getNeighbors(x, y);
                    const flagged = neighbors.filter(n => n.isFlagged);

                    if (hidden && hidden.length > 0) {
                        // B1: 未開封マス数 == 残り地雷数 (すべて地雷確定)
                        if (hidden.length === rem) {
                            logicalSets.push({
                                causeTiles: [tile],
                                targetTiles: hidden,
                                relationTiles: [...flagged]
                            });
                        }
                        // B2: 残り地雷数 == 0 (すべて安全確定)
                        if (rem === 0) {
                            logicalSets.push({
                                causeTiles: [tile],
                                targetTiles: hidden,
                                relationTiles: [...flagged]
                            });
                        }
                    }
                }
            }

            // 2. 1-1 パターン (1-1 Reduction含む)
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    const tileA = this.board[y][x];
                    if (!tileA.isOpen || remMinesMap[y][x] !== 1) continue;

                    const unopenedA = unopenedMap[y][x];
                    if (!unopenedA || unopenedA.length < 2) continue;

                    // 隣接または近傍の別の数字マスBを探索
                    const neighborsA = this.getNeighbors(x, y);
                    for (const tileB of neighborsA) {
                        if (!tileB.isOpen || tileB === tileA) continue;
                        const bx = tileB.x;
                        const by = tileB.y;
                        if (remMinesMap[by][bx] !== 1) continue;

                        const unopenedB = unopenedMap[by][bx];
                        if (!unopenedB || unopenedB.length < 2) continue;

                        // AとBの共通の未開封セル
                        const intersection = unopenedA.filter(t => unopenedB.includes(t));
                        if (intersection.length === 2) {
                            // Aのカバーセルがすべて共通セルである場合、Bの共有外のセルは安全確定
                            const diffB = unopenedB.filter(t => !intersection.includes(t));
                            if (unopenedA.length === 2 && diffB.length > 0) {
                                const flagsA = neighborsA.filter(n => n.isFlagged);
                                const flagsB = this.getNeighbors(bx, by).filter(n => n.isFlagged);
                                logicalSets.push({
                                    causeTiles: [tileA, tileB],
                                    targetTiles: diffB,
                                    relationTiles: [...intersection, ...flagsA, ...flagsB]
                                });
                            }
                        }
                    }
                }
            }

            // 3. 1-2 パターン (1-2 Reduction含む)
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    const tileA = this.board[y][x];
                    if (!tileA.isOpen || remMinesMap[y][x] !== 1) continue;

                    const unopenedA = unopenedMap[y][x];
                    if (!unopenedA || unopenedA.length !== 2) continue; // 1-2パターンでは「1」のカバーセルがちょうど2つ

                    const neighborsA = this.getNeighbors(x, y);
                    for (const tileB of neighborsA) {
                        if (!tileB.isOpen || tileB === tileA) continue;
                        const bx = tileB.x;
                        const by = tileB.y;
                        if (remMinesMap[by][bx] !== 2) continue;

                        const unopenedB = unopenedMap[by][bx];
                        if (!unopenedB || unopenedB.length < 3) continue;

                        // AとB of 共通の未開封セル
                        const intersection = unopenedA.filter(t => unopenedB.includes(t));
                        if (intersection.length === 2) {
                            // Bの共有外のセルに地雷確定
                            const diffB = unopenedB.filter(t => !intersection.includes(t));
                            if (diffB.length > 0) {
                                const flagsA = neighborsA.filter(n => n.isFlagged);
                                const flagsB = this.getNeighbors(bx, by).filter(n => n.isFlagged);
                                logicalSets.push({
                                    causeTiles: [tileA, tileB],
                                    targetTiles: diffB,
                                    relationTiles: [...intersection, ...flagsA, ...flagsB]
                                });
                            }
                        }
                    }
                }
            }

            // 4. 1-2-1 パターン (直線上の並び)
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    // 水平方向
                    if (x + 2 < this.width) {
                        const c1 = this.board[y][x];
                        const c2 = this.board[y][x + 1];
                        const c3 = this.board[y][x + 2];
                        if (c1.isOpen && c2.isOpen && c3.isOpen) {
                            const r1 = remMinesMap[y][x];
                            const r2 = remMinesMap[y][x + 1];
                            const r3 = remMinesMap[y][x + 2];
                            if (r1 === 1 && r2 === 2 && r3 === 1) {
                                const u1 = unopenedMap[y][x];
                                const u2 = unopenedMap[y][x + 1];
                                const u3 = unopenedMap[y][x + 2];
                                if (u1 && u2 && u3 && u1.length > 0 && u3.length > 0) {
                                    const diff1 = u1.filter(t => !u2.includes(t));
                                    const diff3 = u3.filter(t => !u2.includes(t));
                                    if (diff1.length === 0 && diff3.length === 0) {
                                        const safeTargets = u2.filter(t => !u1.includes(t) && !u3.includes(t));
                                        const relation = [...u1, ...u2, ...u3];
                                        if (safeTargets.length > 0) {
                                            logicalSets.push({
                                                causeTiles: [c1, c2, c3],
                                                targetTiles: safeTargets,
                                                relationTiles: relation
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // 垂直方向
                    if (y + 2 < this.height) {
                        const c1 = this.board[y][x];
                        const c2 = this.board[y + 1][x];
                        const c3 = this.board[y + 2][x];
                        if (c1.isOpen && c2.isOpen && c3.isOpen) {
                            const r1 = remMinesMap[y][x];
                            const r2 = remMinesMap[y + 1][x];
                            const r3 = remMinesMap[y + 2][x];
                            if (r1 === 1 && r2 === 2 && r3 === 1) {
                                const u1 = unopenedMap[y][x];
                                const u2 = unopenedMap[y + 1][x];
                                const u3 = unopenedMap[y + 2][x];
                                if (u1 && u2 && u3 && u1.length > 0 && u3.length > 0) {
                                    const diff1 = u1.filter(t => !u2.includes(t));
                                    const diff3 = u3.filter(t => !u2.includes(t));
                                    if (diff1.length === 0 && diff3.length === 0) {
                                        const safeTargets = u2.filter(t => !u1.includes(t) && !u3.includes(t));
                                        const relation = [...u1, ...u2, ...u3];
                                        if (safeTargets.length > 0) {
                                            logicalSets.push({
                                                causeTiles: [c1, c2, c3],
                                                targetTiles: safeTargets,
                                                relationTiles: relation
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // もし確定情報がある場合
        if (logicalSets.length > 0) {
            this.hintUses--;
            this.updateDisplays();

            // ランダムに1つの論理的確定要因を選ぶ
            const selectedSet = logicalSets[Math.floor(Math.random() * logicalSets.length)];

            // 関係する全タイルを黄色でハイライト
            const highlightSet = new Set([
                ...selectedSet.causeTiles,
                ...selectedSet.targetTiles,
                ...selectedSet.relationTiles
            ]);

            highlightSet.forEach(t => {
                if (t) {
                    if (this.isCube3d) {
                        // 3Dモード時はボクセル共有する全タイルをハイライト
                        const tiles = this.voxelMap.get(`${t.i},${t.j},${t.k}`);
                        if (tiles) {
                            tiles.forEach(subT => {
                                if (subT.element) subT.element.classList.add('hint-highlight');
                            });
                        }
                    } else {
                        if (t.element) t.element.classList.add('hint-highlight');
                    }
                }
            });

            // ハイライトされた全セルの平均位置を求めてスクロール
            let totalOffsetLeft = 0;
            let totalOffsetTop = 0;
            let count = 0;
            highlightSet.forEach(t => {
                if (t && t.element) {
                    totalOffsetLeft += t.element.offsetLeft;
                    totalOffsetTop += t.element.offsetTop;
                    count++;
                }
            });

            if (count > 0 && this.boardContainer) {
                const avgLeft = totalOffsetLeft / count;
                const avgTop = totalOffsetTop / count;

                // 最初のセルのサイズを取得（フォールバックとして30px）
                const firstTile = Array.from(highlightSet).find(t => t && t.element);
                const tileWidth = firstTile ? firstTile.element.offsetWidth : 30;
                const tileHeight = firstTile ? firstTile.element.offsetHeight : 30;

                // boardContainer自体のオフセットを加算して、ウィンドウ基準の絶対座標にする
                const absoluteLeft = avgLeft + this.boardContainer.offsetLeft;
                const absoluteTop = avgTop + this.boardContainer.offsetTop;

                // 画面（ウィンドウ）の中央に配置するための目標スクロール位置を計算
                const targetScrollLeft = absoluteLeft + tileWidth / 2 - window.innerWidth / 2;
                const targetScrollTop = absoluteTop + tileHeight / 2 - window.innerHeight / 2;

                window.scrollTo({
                    left: targetScrollLeft,
                    top: targetScrollTop,
                    behavior: 'smooth'
                });
            }

            // 3秒後に自動的にハイライトを消去するタイマーを設定
            this.hintTimeoutId = setTimeout(() => {
                this.clearHintHighlight();
            }, 3000);

        } else {
            const t = TRANSLATIONS[this.lang];
            this.showToast(t.err_no_hints_found);
        }
    }



    clearHintHighlight() {
        if (this.isCube3d) {
            for (let face = 0; face < 6; face++) {
                for (let y = 0; y < this.cubeSize; y++) {
                    for (let x = 0; x < this.cubeSize; x++) {
                        const tile = this.board[face][y][x];
                        if (tile && tile.element) {
                            tile.element.classList.remove('hint-highlight');
                        }
                    }
                }
            }
        } else {
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    const tile = this.board[y][x];
                    if (tile && tile.element) {
                        tile.element.classList.remove('hint-highlight');
                    }
                }
            }
        }
    }

    /**
     * テーマを適用するメソッド。bodyのクラスを切り替え、セレクトボックス表示を同期します。
     * @param {string} theme - 'modern' または 'retro'
     */
    applyTheme(theme) {
        document.body.classList.remove('theme-modern', 'theme-retro');
        document.body.classList.add(`theme-${theme}`);

        if (this.headerThemeSelect) this.headerThemeSelect.value = theme;
        if (this.modalThemeSelect) this.modalThemeSelect.value = theme;
    }

    /**
     * 新しいテーマを設定し、localStorageに保存して適用します。
     * @param {string} theme - 'modern' または 'retro'
     */
    setTheme(theme) {
        this.theme = theme;
        this.safeSet('minesweeper-theme', theme);
        this.applyTheme(theme);
    }

    /**
     * 指定された難易度に対応するベストタイムを読み込み表示します。
     * @param {string} diff 
     */
    loadBestTime(diff) {
        const bestTimeDisplay = document.getElementById('best-time');
        if (!bestTimeDisplay) return;

        if (diff === 'timeattack') {
            const key = `timeattack-${this.width}x${this.height}-${this.minesCount}`;
            const rawCount = this.safeGet(`minesweeper-best-${key}`);
            bestTimeDisplay.innerText = rawCount ? rawCount : '0';
            if (bestTimeDisplay.parentElement) {
                bestTimeDisplay.parentElement.title = this.lang === 'ja' ? 'ベストクリア数' : 'Best Cleared';
            }
        } else {
            const key = diff === 'custom' ? `custom-${this.width}x${this.height}-${this.minesCount}` : diff;
            const rawSec = this.safeGet(`minesweeper-best-${key}`);
            if (rawSec) {
                const sec = parseInt(rawSec);
                const m = Math.floor(sec / 60).toString().padStart(2, '0');
                const s = (sec % 60).toString().padStart(2, '0');
                bestTimeDisplay.innerText = `${m}:${s}`;
            } else {
                bestTimeDisplay.innerText = '--:--';
            }
            if (bestTimeDisplay.parentElement) {
                bestTimeDisplay.parentElement.title = this.lang === 'ja' ? 'ベストタイム' : 'Best Time';
            }
        }
    }

    /**
     * ヘルプモーダルを表示します。
     */
    showHelp() {
        if (this.helpModal) {
            this.helpModal.classList.remove('hidden');
        }
    }

    /**
     * ヘルプモーダルを非表示にします。
     */
    hideHelp() {
        if (this.helpModal) {
            this.helpModal.classList.add('hidden');
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        this.safeSet('minesweeper-muted', this.isMuted);
        this.updateSoundButton();
        this.initAudio();
    }

    updateSoundButton() {
        if (!this.soundBtn) return;
        this.soundBtn.innerText = this.isMuted ? '🔇' : '🔊';
        this.soundBtn.title = this.isMuted
            ? (this.lang === 'ja' ? '消音中 (クリックで解除)' : 'Muted (Click to unmute)')
            : (this.lang === 'ja' ? '音声あり (クリックで消音)' : 'Sound On (Click to mute)');
    }

    initAudio() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    playTone(frequency, type, duration, volume = 0.1) {
        if (this.isMuted) return;
        this.initAudio();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

        gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
    }

    playClickSound() {
        this.playTone(800, 'triangle', 0.08, 0.1);
    }

    playFlagSound() {
        this.playTone(400, 'sine', 0.1, 0.1);
    }

    playExplosionSound() {
        if (this.isMuted) return;
        this.initAudio();
        if (!this.audioCtx) return;

        const bufferSize = this.audioCtx.sampleRate * 0.5;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, this.audioCtx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(10, this.audioCtx.currentTime + 0.5);

        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.5);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        noise.start();
    }

    playComboSound(combo) {
        if (this.isMuted) return;
        this.initAudio();
        if (!this.audioCtx) return;

        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        const baseIndex = Math.min(combo - 1, 4);

        const now = this.audioCtx.currentTime;

        const playSubTone = (freq, delay) => {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + delay);
            gain.gain.setValueAtTime(0.15, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.15);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now + delay);
            osc.stop(now + delay + 0.15);
        };

        playSubTone(notes[baseIndex], 0);
        playSubTone(notes[baseIndex + 1], 0.08);
        playSubTone(notes[baseIndex + 2], 0.16);
    }

    startSurvivalLoop() {
        let lastBulletSpawnTime = 0;
        let lastLaserSpawnTime = 0;
        let currentLaserInterval = this.getNextLaserInterval();
        let laserFired = false; // 発射したかどうか

        this.onLaserFired = () => {
            // 発射後5〜10秒後に次の銃撃を開始するため、タイムスタンプをリセット
            lastLaserSpawnTime = performance.now();
            currentLaserInterval = this.getNextLaserInterval();
        };

        const loop = (timestamp) => {
            if (this.gameOver || !this.isSurvival) {
                this.survivalAnimationId = null;
                return;
            }

            const normalBulletsCount = this.bullets.filter(b => b.type !== 'gun').length;
            let maxNormalBullets = this.survivalLevel + 1; // 2, 3, 4, 5, 6
            if (this.currentDifficulty === 'custom' || this.isCube3d) {
                const totalTiles = this.isCube3d ? (6 * this.cubeSize * this.cubeSize) : (this.width * this.height);
                maxNormalBullets = Math.max(2, Math.floor(totalTiles / 30)) + (this.survivalLevel - 1);
            }

            const spawnInterval = Math.max(200, 1500 - this.survivalLevel * 250);
            if (!lastBulletSpawnTime) lastBulletSpawnTime = timestamp;
            if (timestamp - lastBulletSpawnTime > spawnInterval) {
                if (normalBulletsCount < maxNormalBullets) {
                    this.spawnSurvivalBullet();
                }
                lastBulletSpawnTime = timestamp;
            }

            if (!lastLaserSpawnTime) lastLaserSpawnTime = timestamp;
            if (timestamp - lastLaserSpawnTime > currentLaserInterval) {
                this.spawnSurvivalLaser();
                // 銃皎の対象が完了するまで間隔タイマーはリセットしない
                // (発射フェーズで onLaserFired が呼ばれる)
                currentLaserInterval = Infinity; // 発射まで待機
            }

            this.updateSurvivalBullets();
            this.updateSurvivalLasers();

            this.survivalAnimationId = requestAnimationFrame(loop);
        };

        this.survivalAnimationId = requestAnimationFrame(loop);
    }

    spawnSurvivalBullet() {
        if (!this.boardContainer || !this.boardElement) return;

        const currentContainer = this.isCube3d ? this.cubeContainer : this.boardElement;
        const boardWidth = currentContainer.offsetWidth;
        const boardHeight = currentContainer.offsetHeight;
        const speedScale = 1.2; // 速度はどの難易度も一定

        const types = ['linear', 'homing', 'bounce'];
        const type = types[Math.floor(Math.random() * types.length)];

        let x = 0, y = 0, vx = 0, vy = 0;
        const margin = 20;
        const edge = Math.floor(Math.random() * 4);

        if (edge === 0) {
            x = Math.random() * boardWidth;
            y = -margin;
            vy = (1.2 + Math.random() * 1.5) * speedScale;
            vx = (Math.random() - 0.5) * speedScale;
        } else if (edge === 1) {
            x = boardWidth + margin;
            y = Math.random() * boardHeight;
            vx = -(1.2 + Math.random() * 1.5) * speedScale;
            vy = (Math.random() - 0.5) * speedScale;
        } else if (edge === 2) {
            x = Math.random() * boardWidth;
            y = boardHeight + margin;
            vy = -(1.2 + Math.random() * 1.5) * speedScale;
            vx = (Math.random() - 0.5) * speedScale;
        } else {
            x = -margin;
            y = Math.random() * boardHeight;
            vx = (1.2 + Math.random() * 1.5) * speedScale;
            vy = (Math.random() - 0.5) * speedScale;
        }

        const bulletEl = document.createElement('div');
        bulletEl.className = `bullet type-${type}`;
        bulletEl.style.left = `${x}px`;
        bulletEl.style.top = `${y}px`;
        currentContainer.appendChild(bulletEl);

        this.bullets.push({
            x,
            y,
            vx,
            vy,
            type,
            spawnTime: performance.now(),
            element: bulletEl
        });
    }

    updateSurvivalBullets() {
        const currentContainer = this.isCube3d ? this.cubeContainer : this.boardElement;
        if (!currentContainer) return;

        const boardWidth = currentContainer.offsetWidth;
        const boardHeight = currentContainer.offsetHeight;
        const speedScale = 0.8 + this.survivalLevel * 0.4;
        const collisionRadius = 15;

        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const b = this.bullets[i];

            if (b.type === 'homing') {
                const dx = this.mouseX - b.x;
                const dy = this.mouseY - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 5) {
                    const targetVx = (dx / dist) * (1.0 * speedScale);
                    const targetVy = (dy / dist) * (1.0 * speedScale);
                    b.vx += (targetVx - b.vx) * 0.05;
                    b.vy += (targetVy - b.vy) * 0.05;
                }
            }

            b.x += b.vx;
            b.y += b.vy;

            // 誘導弾の処理
            if (b.type === 'homing') {
                const age = performance.now() - b.spawnTime;

                if (age > 5000) {
                    // 5秒経過後：直線弾（linear）に変換する（見た目は変えない）
                    b.type = 'linear';
                    const currentSpeed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
                    if (currentSpeed > 0) {
                        const linearSpeed = 1.2 * 2.0;
                        b.vx = (b.vx / currentSpeed) * linearSpeed;
                        b.vy = (b.vy / currentSpeed) * linearSpeed;
                    }
                } else if (age > 2000) {
                    // 出現後2秒〜5秒：壁に当たると消滅
                    const radius = 7;
                    if (b.x < radius || b.x > boardWidth - radius || b.y < radius || b.y > boardHeight - radius) {
                        b.element.remove();
                        this.bullets.splice(i, 1);
                        continue;
                    }
                }
                // 出現後2秒未満は壁衝突なし（画面内に入るまで猶予）
            }

            // バウンド弾：2回バウンドまでは反射、3回目の壁衝突で消滅
            if (b.type === 'bounce') {
                const radius = 7;
                let hitWall = false;

                if (b.x < radius) {
                    hitWall = true;
                    if (b.afterBounceLimit) {
                        b.element.remove(); this.bullets.splice(i, 1); continue;
                    }
                    b.x = radius; b.vx = Math.abs(b.vx);
                } else if (b.x > boardWidth - radius) {
                    hitWall = true;
                    if (b.afterBounceLimit) {
                        b.element.remove(); this.bullets.splice(i, 1); continue;
                    }
                    b.x = boardWidth - radius; b.vx = -Math.abs(b.vx);
                }

                if (b.y < radius) {
                    hitWall = true;
                    if (b.afterBounceLimit) {
                        b.element.remove(); this.bullets.splice(i, 1); continue;
                    }
                    b.y = radius; b.vy = Math.abs(b.vy);
                } else if (b.y > boardHeight - radius) {
                    hitWall = true;
                    if (b.afterBounceLimit) {
                        b.element.remove(); this.bullets.splice(i, 1); continue;
                    }
                    b.y = boardHeight - radius; b.vy = -Math.abs(b.vy);
                }

                if (hitWall) {
                    if (b.bounceCount === undefined) b.bounceCount = 0;
                    b.bounceCount++;
                    if (b.bounceCount >= 2) {
                        b.afterBounceLimit = true; // 次の壁衝突で消滅
                    }
                }
            }

            // linear弾・gun弾は盤面の壁に当たると消滅する
            // （盤面外から出現するため、出現後500msは壁判定を免除）
            if (b.type === 'linear' || b.type === 'gun') {
                const radius = b.type === 'gun' ? 9 : 7;
                const age = performance.now() - b.spawnTime;
                if (age > 500) {
                    if (b.x < radius || b.x > boardWidth - radius || b.y < radius || b.y > boardHeight - radius) {
                        b.element.remove();
                        this.bullets.splice(i, 1);
                        continue;
                    }
                }
            }

            // 弾の描画サイズと中心補正
            if (b.type === 'gun') {
                b.element.style.left = `${b.x - 9}px`;
                b.element.style.top = `${b.y - 9}px`;
            } else {
                b.element.style.left = `${b.x - 7}px`;
                b.element.style.top = `${b.y - 7}px`;
            }

            // 弾同士の衝突判定：銃の弾が他の弾と接触した場合、他の弾を消滅させる（銃の弾は残る）
            if (b.type === 'gun') {
                for (let j = this.bullets.length - 1; j >= 0; j--) {
                    const other = this.bullets[j];
                    if (other.type !== 'gun') {
                        const dx = b.x - other.x;
                        const dy = b.y - other.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 16) {
                            other.element.remove();
                            this.bullets.splice(j, 1);
                            if (j < i) {
                                i--;
                            }
                        }
                    }
                }
            }

            // プレイヤーとの衝突判定
            if (!this.isInvincible && !this.gameOver) {
                const dx = this.mouseX - b.x;
                const dy = this.mouseY - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const r = b.type === 'gun' ? 17 : collisionRadius;
                if (dist < r) {
                    this.handleSurvivalDamage();
                    b.element.remove();
                    this.bullets.splice(i, 1);
                    continue;
                }
            }
        }
    }

    spawnSurvivalLaser() {
        if (!this.boardContainer || !this.boardElement) return;

        const currentContainer = this.isCube3d ? this.cubeContainer : this.boardElement;
        const boardWidth = currentContainer.offsetWidth;
        const boardHeight = currentContainer.offsetHeight;

        const edge = Math.floor(Math.random() * 4); // 0: 上, 1: 右, 2: 下, 3: 左
        let ax = 0, ay = 0;
        const offset = 20;

        if (edge === 0) {
            ax = Math.random() * boardWidth;
            ay = -offset;
        } else if (edge === 1) {
            ax = boardWidth + offset;
            ay = Math.random() * boardHeight;
        } else if (edge === 2) {
            ax = Math.random() * boardWidth;
            ay = boardHeight + offset;
        } else {
            ax = -offset;
            ay = Math.random() * boardHeight;
        }

        const laserEl = document.createElement('div');
        laserEl.className = 'laser-line';
        laserEl.style.left = `${ax}px`;
        laserEl.style.top = `${ay}px`;

        const diagonal = Math.sqrt(boardWidth * boardWidth + boardHeight * boardHeight) + 100;
        laserEl.style.width = `${diagonal}px`;

        currentContainer.appendChild(laserEl);

        this.lasers.push({
            ax,
            ay,
            diagonal,
            angle: 0,
            startTime: performance.now(),
            isLocked: false,
            element: laserEl
        });
    }

    updateSurvivalLasers() {
        const currentContainer = this.isCube3d ? this.cubeContainer : this.boardElement;
        if (!currentContainer) return;

        const now = performance.now();

        for (let i = this.lasers.length - 1; i >= 0; i--) {
            const laser = this.lasers[i];
            const elapsed = now - laser.startTime;

            // 銃の追撃・ロックオン警告音再生
            if (laser.lastSoundTime === undefined) laser.lastSoundTime = 0;
            const soundInterval = laser.isLocked ? 120 : 350;
            if (now - laser.lastSoundTime > soundInterval) {
                this.playSurvivalLockSound(laser.isLocked);
                laser.lastSoundTime = now;
            }

            if (elapsed < 2000) {
                // 1. 追尾フェーズ（0.0s 〜 2.0s）
                const dx = this.mouseX - laser.ax;
                const dy = this.mouseY - laser.ay;
                laser.angle = Math.atan2(dy, dx);
                laser.element.style.transform = `rotate(${laser.angle}rad)`;
            } else if (elapsed < 3000) {
                // 2. ロックオンフェーズ（2.0s 〜 3.0s）
                if (!laser.isLocked) {
                    laser.isLocked = true;
                    laser.element.classList.add('locked');
                }
            } else {
                // 3. 発射フェーズ（3.0s）
                const fireEl = document.createElement('div');
                fireEl.className = 'laser-fire';
                fireEl.style.left = `${laser.ax}px`;
                fireEl.style.top = `${laser.ay}px`;
                fireEl.style.width = `${laser.diagonal}px`;
                fireEl.style.transform = `rotate(${laser.angle}rad)`;
                currentContainer.appendChild(fireEl);

                setTimeout(() => {
                    fireEl.remove();
                }, 400);

                // 発射音の再生
                this.playSurvivalFireSound();

                // 超高速の弾 type-gun を生成して射出する
                const speed = 10 + this.survivalLevel * 2.0; // 速い弾
                const vx = Math.cos(laser.angle) * speed;
                const vy = Math.sin(laser.angle) * speed;

                const bulletEl = document.createElement('div');
                bulletEl.className = 'bullet type-gun';
                bulletEl.style.left = `${laser.ax}px`;
                bulletEl.style.top = `${laser.ay}px`;
                currentContainer.appendChild(bulletEl);

                this.bullets.push({
                    x: laser.ax,
                    y: laser.ay,
                    vx,
                    vy,
                    type: 'gun',
                    spawnTime: performance.now(),
                    element: bulletEl
                });

                laser.element.remove();
                this.lasers.splice(i, 1);

                // 発射完了を通知：発射後から次の銃撃間隔を開始する
                if (this.onLaserFired) {
                    this.onLaserFired();
                }
            }
        }
    }

    handleSurvivalDamage() {
        if (this.isInvincible || this.gameOver) return;

        this.lives--;
        this.updateDisplays();

        // 被弾音の再生
        this.playSurvivalHitSound();

        if (this.lives <= 0) {
            this.lives = 0;
            this.updateDisplays();
            this.triggerGameOver(false);
            return;
        }

        // 点滅エフェクトなし（無敬時間のみ有効）
        this.isInvincible = true;
        this.invincibleTimeoutId = setTimeout(() => {
            this.isInvincible = false;
            this.invincibleTimeoutId = null;
        }, 1500);
    }

    clearSurvivalBullets() {
        if (this.bullets) {
            this.bullets.forEach(b => {
                if (b.element) b.element.remove();
            });
        }
        this.bullets = [];
    }

    clearSurvivalLasers() {
        if (this.lasers) {
            this.lasers.forEach(l => {
                if (l.element) l.element.remove();
            });
        }
        this.lasers = [];
    }

    getNextLaserInterval() {
        // 5〜10秒の間でランダムに設定、高難易度ほど頻繁
        const minInterval = 9000 - (this.survivalLevel - 1) * 1000;
        const maxInterval = 10000 - (this.survivalLevel - 1) * 1000;
        return minInterval + Math.random() * (maxInterval - minInterval);
    }

    initCubeCoordinates() {
        const N = this.cubeSize;
        const H = (N - 1) / 2;
        this.cubeCoords = {};

        for (let face = 0; face < 6; face++) {
            for (let x = 0; x < N; x++) {
                for (let y = 0; y < N; y++) {
                    const u = x - H;
                    const v = y - H;
                    let X = 0, Y = 0, Z = 0;

                    if (face === 0) { // Front
                        X = u;
                        Y = -v;
                        Z = H + 0.5;
                    } else if (face === 1) { // Back
                        X = -u;
                        Y = -v;
                        Z = -(H + 0.5);
                    } else if (face === 2) { // Up
                        X = u;
                        Y = H + 0.5;
                        Z = -v;
                    } else if (face === 3) { // Down
                        X = u;
                        Y = -(H + 0.5);
                        Z = v;
                    } else if (face === 4) { // Left
                        X = -(H + 0.5);
                        Y = -v;
                        Z = -u;
                    } else if (face === 5) { // Right
                        X = H + 0.5;
                        Y = -v;
                        Z = u;
                    }
                    this.cubeCoords[`${face},${x},${y}`] = { x: X, y: Y, z: Z };
                }
            }
        }
    }

    getNeighbors3D(face, x, y) {
        const tile = this.board[face][y][x];
        if (!tile) return [];

        const N = this.cubeSize;
        const neighborsMap = new Map();

        // 1. 自面内の 2D 8近傍をすべて取得
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                    const t = this.board[face][ny][nx];
                    if (t) neighborsMap.set(`${t.i},${t.j},${t.k}`, t);
                }
            }
        }

        // 2. 境界（上・下・左・右）を跨ぐ接続
        const EDGE_CONNECTIONS = {
            // 0: Front
            "0,U": { face: 2, edge: "D", reverse: false },
            "0,D": { face: 3, edge: "U", reverse: false },
            "0,L": { face: 4, edge: "R", reverse: false },
            "0,R": { face: 5, edge: "L", reverse: false },
            // 1: Back
            "1,U": { face: 2, edge: "U", reverse: true },
            "1,D": { face: 3, edge: "D", reverse: true },
            "1,L": { face: 5, edge: "R", reverse: false },
            "1,R": { face: 4, edge: "L", reverse: false },
            // 2: Up
            "2,U": { face: 1, edge: "U", reverse: true },
            "2,D": { face: 0, edge: "U", reverse: false },
            "2,L": { face: 4, edge: "U", reverse: false },
            "2,R": { face: 5, edge: "U", reverse: true },
            // 3: Down
            "3,U": { face: 0, edge: "D", reverse: false },
            "3,D": { face: 1, edge: "D", reverse: true },
            "3,L": { face: 4, edge: "D", reverse: true },
            "3,R": { face: 5, edge: "D", reverse: false },
            // 4: Left
            "4,U": { face: 2, edge: "L", reverse: false },
            "4,D": { face: 3, edge: "L", reverse: true },
            "4,L": { face: 1, edge: "R", reverse: false },
            "4,R": { face: 0, edge: "L", reverse: false },
            // 5: Right
            "5,U": { face: 2, edge: "R", reverse: true },
            "5,D": { face: 3, edge: "R", reverse: false },
            "5,L": { face: 0, edge: "R", reverse: false },
            "5,R": { face: 1, edge: "L", reverse: false }
        };

        const checkEdge = (edgeName, kVal) => {
            const conn = EDGE_CONNECTIONS[`${face},${edgeName}`];
            if (conn) {
                const k_target = conn.reverse ? (N - 1 - kVal) : kVal;
                const targetX = (conn.edge === "U" || conn.edge === "D") ? k_target : (conn.edge === "L" ? 0 : N - 1);
                const targetY = (conn.edge === "U") ? 0 : ((conn.edge === "D") ? N - 1 : k_target);

                // 接続先の面において、接合セル自身およびその2D 8近傍を取得して面の内側セルもカバーする
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        const nx = targetX + dx;
                        const ny = targetY + dy;
                        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                            const t = this.board[conn.face][ny][nx];
                            if (t) {
                                // 自分自身と同じボクセル（共有セル）は隣接から除外
                                if (t.i !== tile.i || t.j !== tile.j || t.k !== tile.k) {
                                    neighborsMap.set(`${t.i},${t.j},${t.k}`, t);
                                }
                            }
                        }
                    }
                }
            }
        };

        // 各辺 of 境界判定
        if (y === 0) checkEdge("U", x);
        if (y === N - 1) checkEdge("D", x);
        if (x === 0) checkEdge("L", y);
        if (x === N - 1) checkEdge("R", y);

        return Array.from(neighborsMap.values());
    }

    placeMines3D(firstFace, firstClickX, firstClickY) {
        const N = this.cubeSize;
        const avoidVoxels = new Set();

        const totalVoxelsCount = this.voxelMap.size;
        const neighbors = this.getNeighbors3D(firstFace, firstClickX, firstClickY);
        // 隣接まで安全にすると残りの候補数が地雷数以下(または余裕が2未満)になる場合は、初手ボクセルのみを安全にする
        const needNeighborsSafety = (totalVoxelsCount - 1 - neighbors.length) >= this.minesCount + 2;

        const firstTile = this.board[firstFace][firstClickY][firstClickX];
        if (firstTile) {
            avoidVoxels.add(`${firstTile.i},${firstTile.j},${firstTile.k}`);
            if (needNeighborsSafety) {
                neighbors.forEach(t => {
                    avoidVoxels.add(`${t.i},${t.j},${t.k}`);
                });
            }
        }

        const candidates = [];
        for (const key of this.voxelMap.keys()) {
            if (!avoidVoxels.has(key)) {
                candidates.push(key);
            }
        }

        for (let i = candidates.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            const temp = candidates[i];
            candidates[i] = candidates[r];
            candidates[r] = temp;
        }

        const countToPlace = Math.min(this.minesCount, candidates.length);
        for (let i = 0; i < countToPlace; i++) {
            const key = candidates[i];
            const tiles = this.voxelMap.get(key);
            if (tiles) {
                tiles.forEach(t => {
                    t.isMine = true;
                });
            }
        }

        this.calculateNeighbors3D();
    }

    calculateNeighbors3D() {
        const N = this.cubeSize;
        for (let face = 0; face < 6; face++) {
            for (let y = 0; y < N; y++) {
                for (let x = 0; x < N; x++) {
                    const tile = this.board[face][y][x];
                    if (tile.isMine) continue;
                    let count = 0;
                    this.getNeighbors3D(face, x, y).forEach(n => {
                        if (n.isMine) count++;
                    });
                    tile.neighborMines = count;
                }
            }
        }
    }

    renderCube() {
        if (!this.cubeElement || !this.cubeContainer) return;
        this.cubeElement.innerHTML = '';

        this.cubeRotationX = -20;
        this.cubeRotationY = 30;
        this.cubeElement.style.transform = `rotateX(${this.cubeRotationX}deg) rotateY(${this.cubeRotationY}deg)`;

        const faceNames = ['front', 'back', 'up', 'down', 'left', 'right'];
        const N = this.cubeSize;

        for (let face = 0; face < 6; face++) {
            const faceEl = document.createElement('div');
            faceEl.className = `cube-face face-${faceNames[face]}`;
            faceEl.style.gridTemplateColumns = `repeat(${N}, 1fr)`;
            faceEl.style.gridTemplateRows = `repeat(${N}, 1fr)`;

            for (let y = 0; y < N; y++) {
                for (let x = 0; x < N; x++) {
                    const tile = this.board[face][y][x];
                    tile.element = document.createElement('div');
                    tile.element.classList.add('tile');
                    tile.element.dataset.face = face;
                    tile.element.dataset.x = x;
                    tile.element.dataset.y = y;

                    faceEl.appendChild(tile.element);
                }
            }
            this.cubeElement.appendChild(faceEl);
        }
    }

    rotateCubeStep(direction) {
        if (!this.isCube3d || !this.cubeElement) return;

        if (direction === 'up') {
            this.cubeRotationX += 90;
        } else if (direction === 'down') {
            this.cubeRotationX -= 90;
        } else if (direction === 'left') {
            this.cubeRotationY -= 90;
        } else if (direction === 'right') {
            this.cubeRotationY += 90;
        }

        this.cubeElement.style.transform = `rotateX(${this.cubeRotationX}deg) rotateY(${this.cubeRotationY}deg)`;
    }

    playSurvivalLockSound(isLocked) {
        if (this.isMuted) return;
        this.initAudio();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(isLocked ? 1200 : 700, this.audioCtx.currentTime);

        gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.05);
    }

    playSurvivalFireSound() {
        if (this.isMuted) return;
        this.initAudio();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1500, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, this.audioCtx.currentTime + 0.35);

        gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.35);

        const bufferSize = this.audioCtx.sampleRate * 0.2;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;
        const noiseFilter = this.audioCtx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 1000;

        const noiseGain = this.audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.2);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.audioCtx.destination);
        noise.start();
    }

    playSurvivalHitSound() {
        if (this.isMuted) return;
        this.initAudio();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, this.audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, this.audioCtx.currentTime + 0.4);

        gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.4);

        const bufferSize = this.audioCtx.sampleRate * 0.3;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;
        const noiseFilter = this.audioCtx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 250;

        const noiseGain = this.audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.3);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.audioCtx.destination);
        noise.start();
    }

    toggleLensMode() {
        if (this.gameOver || this.isFirstClick) return;
        if (!this.lensModeActive && this.lensUses <= 0) {
            const t = TRANSLATIONS[this.lang];
            this.showToast(t.err_no_lenses);
            return;
        }

        this.lensModeActive = !this.lensModeActive;
        if (this.lensModeActive) {
            document.body.classList.add('lens-mode');
            if (this.lensBtn) this.lensBtn.classList.add('active');
        } else {
            document.body.classList.remove('lens-mode');
            if (this.lensBtn) this.lensBtn.classList.remove('active');
        }
    }

    useLensOn(tile) {
        if (tile.isOpen || tile.isFlagged) return;

        this.lensUses--;
        this.updateDisplays();

        const sameVoxelTiles = this.isCube3d
            ? this.voxelMap.get(`${tile.i},${tile.j},${tile.k}`)
            : [tile];

        sameVoxelTiles.forEach(t => {
            if (t.element) {
                t.element.style.backgroundColor = 'rgba(234, 179, 8, 0.4)'; // 透視中の背景を黄色がかった半透明にする
                if (t.isMine) {
                    t.element.innerText = '💣';
                } else {
                    t.element.innerText = t.neighborMines > 0 ? t.neighborMines : '';
                }
            }
        });

        const timeoutId = setTimeout(() => {
            sameVoxelTiles.forEach(t => {
                if (t.element) {
                    t.element.style.backgroundColor = '';
                    if (t.isFlagged) {
                        t.element.innerText = '🚩';
                    } else {
                        t.element.innerText = '';
                    }
                }
                t.lensTimeoutId = null;
            });
        }, 2000);

        sameVoxelTiles.forEach(t => {
            t.lensTimeoutId = timeoutId;
        });

        this.toggleLensMode(); // 使用後は自動で虫眼鏡モードをOFFにする
    }

    showToast(message) {
        const existing = document.getElementById('hint-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'hint-toast';
        toast.innerText = message;

        // トーストのCSSスタイル（画面中央の特定位置に固定表示）
        toast.style.position = 'fixed';
        toast.style.left = '50%';
        toast.style.top = '50%';
        toast.style.transform = 'translate(-50%, -50%)';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        toast.style.color = '#fff';
        toast.style.padding = '0.75rem 1.5rem';
        toast.style.borderRadius = '8px';
        toast.style.zIndex = '99999';
        toast.style.fontSize = '1.2rem';
        toast.style.fontWeight = 'bold';
        toast.style.pointerEvents = 'none';
        toast.style.transition = 'opacity 0.5s ease';
        toast.style.opacity = '1';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
        }, 1500);

        setTimeout(() => {
            toast.remove();
        }, 2000);
    }
}
