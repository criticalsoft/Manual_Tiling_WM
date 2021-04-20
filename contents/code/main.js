(function () {
	"use strict";

	var config = {
		// Default Enable / Disable
		// is_window_group: false,
		// is_tiling_grid: false,

		ignoreMaximized: true,
		ignoreShaded: true,
		liveUpdate: true,
		// opacity: 0.5,
		opacity: 1,
	};

	// workspace.floatGeometry = {};




	var grid_snap_sw = true;
	if (readConfig('grid_snap_sw', grid_snap_sw)) {
		grid_snap_sw = readConfig('grid_snap_sw', grid_snap_sw);
	}

	var grid_center_sw = false;
	if (readConfig('grid_center_sw', grid_center_sw)) {
		grid_center_sw = readConfig('grid_center_sw', grid_center_sw);
	}

	var grid_size_h = 6;
	if (readConfig('grid_size_h', grid_size_h)) {
		grid_size_h = readConfig('grid_size_h', grid_size_h);
	}

	var grid_size_v = 4;
	if (readConfig('grid_size_v', grid_size_v)) {
		grid_size_v = readConfig('grid_size_v', grid_size_v);
	}

	var snap_size = 40;
	if (readConfig('snap_size', snap_size)) {
		snap_size = readConfig('snap_size', snap_size);
	}

	var switch_desktop_fix = false;
	// if (readConfig('switch_desktop_fix', switch_desktop_fix)) {
	// 	switch_desktop_fix = readConfig('switch_desktop_fix', switch_desktop_fix);
	// }




	// Default FallBack
	var tiling_sw = false;
	if (readConfig('tiling_sw', tiling_sw)) {
		tiling_sw = readConfig('tiling_sw', tiling_sw);
	}

	var index_z_fix = false;
	if (readConfig('index_z_fix', index_z_fix)) {
		index_z_fix = readConfig('index_z_fix', index_z_fix);
	}

	var index_z_delay = 350;
	if (readConfig('index_z_delay', index_z_delay)) {
		index_z_delay = readConfig('index_z_delay', index_z_delay);
	}




	var slot_sw = false;
	if (readConfig('slot_sw', slot_sw)) {
		slot_sw = readConfig('slot_sw', slot_sw);
	}

	var slot_animation_fix = false;
	if (readConfig('slot_animation_fix', slot_animation_fix)) {
		slot_animation_fix = readConfig('slot_animation_fix', slot_animation_fix);
	}




	var split_sted = false;
	var swap_sted = false;
	// var swap_geometry = {};
	// var snap_geometry = {};

	registerShortcut(
		"ManualTilingWM_Swap_Position",
		"Grid WM: Layout >> Swap",
		"Meta+Ctrl+V",
		function () {
			swap_sted = true;
			// print(swap_sted);
			workspace.slotWindowMove();
		}
	);

	registerShortcut(
		"ManualTilingWM_Split_Layout",
		"Grid WM: Layout >> Split",
		"Meta+Ctrl+R",
		function () {
			split_sted = true;
			// print(split_sted);

			// Prevent Screen Change When Split
			var g = {
				x: workspace.activeClient.geometry.x,
				y: workspace.activeClient.geometry.y,
				width: workspace.activeClient.geometry.width - 1,
				height: workspace.activeClient.geometry.height - 1
			}
			workspace.activeClient.geometry = g;

			workspace.slotWindowResize();
		}
	);

	// Horizontal Size
	registerShortcut(
		"ManualTilingWM_H_1_1",
		"Grid WM: Resize >> Horizontal 1",
		"Meta+Ctrl+1",
		function () {
			// grid_size_h = 1;
			// writeConfig('grid_size_h', 1);
			RESIZETO_H(workspace.activeClient, 1);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_2",
		"Grid WM: Resize >> Horizontal 2",
		"Meta+Ctrl+2",
		function () {
			// grid_size_h = 2;
			// writeConfig('grid_size_h', 2);
			RESIZETO_H(workspace.activeClient, 2);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_3",
		"Grid WM: Resize >> Horizontal 3",
		"Meta+Ctrl+3",
		function () {
			// grid_size_h = 3;
			// writeConfig('grid_size_h', 3);
			RESIZETO_H(workspace.activeClient, 3);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_4",
		"Grid WM: Resize >> Horizontal 4",
		"Meta+Ctrl+4",
		function () {
			// grid_size_h = 4;
			// writeConfig('grid_size_h', 4);
			RESIZETO_H(workspace.activeClient, 4);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_5",
		"Grid WM: Resize >> Horizontal 5",
		"Meta+Ctrl+5",
		function () {
			// grid_size_h = 5;
			// writeConfig('grid_size_h', 5);
			RESIZETO_H(workspace.activeClient, 5);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_6",
		"Grid WM: Resize >> Horizontal 6",
		"Meta+Ctrl+6",
		function () {
			// grid_size_h = 6;
			// writeConfig('grid_size_h', 6);
			RESIZETO_H(workspace.activeClient, 6);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_7",
		"Grid WM: Resize >> Horizontal 7",
		"Meta+Ctrl+7",
		function () {
			// grid_size_h = 7;
			// writeConfig('grid_size_h', 7);
			RESIZETO_H(workspace.activeClient, 7);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_8",
		"Grid WM: Resize >> Horizontal 8",
		"Meta+Ctrl+8",
		function () {
			// grid_size_h = 8;
			// writeConfig('grid_size_h', 8);
			RESIZETO_H(workspace.activeClient, 8);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_9",
		"Grid WM: Resize >> Horizontal 9",
		"Meta+Ctrl+9",
		function () {
			// grid_size_h = 9;
			// writeConfig('grid_size_h', 9);
			RESIZETO_H(workspace.activeClient, 9);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_10",
		"Grid WM: Resize >> Horizontal 10",
		"Meta+Ctrl+0",
		function () {
			// grid_size_h = 10;
			// writeConfig('grid_size_h', 10);
			RESIZETO_H(workspace.activeClient, 10);
		}
	);

	// Vertical Size
	registerShortcut(
		"ManualTilingWM_V_1_1",
		"Grid WM: Resize >> Vertical 1",
		"Meta+!",
		function () {
			// grid_size_v = 1;
			// writeConfig('grid_size_v', 1);
			RESIZETO_V(workspace.activeClient, 1);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_2",
		"Grid WM: Resize >> Vertical 2",
		"Meta+@",
		function () {
			// grid_size_v = 2;
			// writeConfig('grid_size_v', 2);
			RESIZETO_V(workspace.activeClient, 2);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_3",
		"Grid WM: Resize >> Vertical 3",
		"Meta+#",
		function () {
			// grid_size_v = 3;
			// writeConfig('grid_size_v', 3);
			RESIZETO_V(workspace.activeClient, 3);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_4",
		"Grid WM: Resize >> Vertical 4",
		"Meta+$",
		function () {
			// grid_size_v = 4;
			// writeConfig('grid_size_v', 4);
			RESIZETO_V(workspace.activeClient, 4);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_5",
		"Grid WM: Resize >> Vertical 5",
		"Meta+%",
		function () {
			// grid_size_v = 5;
			// writeConfig('grid_size_v', 5);
			RESIZETO_V(workspace.activeClient, 5);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_6",
		"Grid WM: Resize >> Vertical 6",
		"Meta+^",
		function () {
			// grid_size_v = 6;
			// writeConfig('grid_size_v', 6);
			RESIZETO_V(workspace.activeClient, 6);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_7",
		"Grid WM: Resize >> Vertical 7",
		"Meta+&",
		function () {
			// grid_size_v = 7;
			// writeConfig('grid_size_v', 7);
			RESIZETO_V(workspace.activeClient, 7);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_8",
		"Grid WM: Resize >> Vertical 8",
		"Meta+*",
		function () {
			// grid_size_v = 8;
			// writeConfig('grid_size_v', 8);
			RESIZETO_V(workspace.activeClient, 8);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_9",
		"Grid WM: Resize >> Vertical 9",
		"Meta+(",
		function () {
			// grid_size_v = 9;
			// writeConfig('grid_size_v', 9);
			RESIZETO_V(workspace.activeClient, 9);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_10",
		"Grid WM: Resize >> Vertical 10",
		"Meta+)",
		function () {
			// grid_size_v = 10;
			// writeConfig('grid_size_v', 10);
			RESIZETO_V(workspace.activeClient, 10);
		}
	);




	// Use KWin Default (Resize Move, Maximize Minimize Shade, Keep Above Below, Close Kill, MoveTo Desktop, Show On Desktop ....)
	// Keep Simple
	// registerShortcut(
	// 	"ManualTilingWM_PackLeft",
	// 	"Grid WM: Pack >> Left",
	// 	"Meta+Alt+A",
	// 	function () {
	// 		workspace.slotWindowPackLeft();
	// 		BorderLimit(workspace.activeClient);
	// 	}
	// );
	// registerShortcut(
	// 	"ManualTilingWM_PackRight",
	// 	"Grid WM: Pack >> Right",
	// 	"Meta+Alt+D",
	// 	function () {
	// 		workspace.slotWindowPackRight();
	// 		BorderLimit(workspace.activeClient);
	// 	}
	// );
	// registerShortcut(
	// 	"ManualTilingWM_PackUp",
	// 	"Grid WM: Pack >> Up",
	// 	"Meta+Alt+W",
	// 	function () {
	// 		workspace.slotWindowPackUp();
	// 		BorderLimit(workspace.activeClient);
	// 	}
	// );
	// registerShortcut(
	// 	"ManualTilingWM_PackDown",
	// 	"Grid WM: Pack >> Down",
	// 	"Meta+Alt+X",
	// 	function () {
	// 		workspace.slotWindowPackDown();
	// 		BorderLimit(workspace.activeClient);
	// 	}
	// );


	// registerShortcut(
	// 	"ManualTilingWM_PackCenter",
	// 	"Grid WM: Pack >> Center",
	// 	"Meta+Alt+S",
	// 	function () {
	// 		var cp = workspace.clientArea(workspace.PlacementArea, workspace.activeClient);

	// 		var g = {
	// 			x: cp.width / 2 + cp.x - workspace.activeClient.width / 2,
	// 			y: cp.height / 2 + cp.y - workspace.activeClient.height / 2,
	// 			width: workspace.activeClient.width,
	// 			height: workspace.activeClient.height,
	// 		};
	// 		workspace.activeClient.geometry = g;

	// 		if (switch_desktop_fix == true) {
	// 			// FIX: Size Change After Send Window To Other Desktop
	// 			// workspace.slotWindowResize();
	// 			workspace.slotWindowMove();
	// 			// workspace.slotWindowMaximize();
	// 		}
	// 	}
	// );


	// registerShortcut(
	// 	"ManualTilingWM_ShrinkHorizontal",
	// 	"Grid WM: Pack >> Horizontal Shrink",
	// 	"Meta+Alt+Q",
	// 	function () {
	// 		workspace.slotWindowShrinkHorizontal();
	// 	}
	// );
	// registerShortcut(
	// 	"ManualTilingWM_GrowHorizontal",
	// 	"Grid WM: Pack >> Horizontal Grow",
	// 	"Meta+Alt+E",
	// 	function () {
	// 		workspace.slotWindowGrowHorizontal();
	// 	}
	// );
	// registerShortcut(
	// 	"ManualTilingWM_GrowVertical",
	// 	"Grid WM: Pack >> Vertical Grow",
	// 	"Meta+Alt+C",
	// 	function () {
	// 		workspace.slotWindowGrowVertical();
	// 	}
	// );
	// registerShortcut(
	// 	"ManualTilingWM_ShrinkVertical",
	// 	"Grid WM: Pack >> Vertical Shrink",
	// 	"Meta+Alt+Z",
	// 	function () {
	// 		workspace.slotWindowShrinkVertical();
	// 	}
	// );




	// if (grid_snap_sw == true) {
	// move(workspace, numberXslots, numberYslots, SlotPosX, SlotPosY, FillSlotSizeWidth, FillSlotSizeHeight)
	// Corner
	registerShortcut(
		"ManualTilingWM_UpLeft",
		"Grid WM: Move >> Up Left",
		// "Grid WM: Resize >> Shrink Horizontal",
		"Meta+Ctrl+Q",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileTopLeft();
				MOVETO(workspace.activeClient, "TL");
			}
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_UpRight",
		"Grid WM: Move >> Up Right",
		// "Grid WM: Resize >> Grow Horizontal",
		"Meta+Ctrl+E",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileTopRight();
				MOVETO(workspace.activeClient, "TR");
			}
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_DownRight",
		"Grid WM: Move >> Down Right",
		// "Grid WM: Resize >> Grow Vertical",
		"Meta+Ctrl+C",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileBottomRight();
				MOVETO(workspace.activeClient, "BR");
			}
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_DownLeft",
		"Grid WM: Move >> Down Left",
		// "Grid WM: Resize >> Shrink Vertical",
		"Meta+Ctrl+Z",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileBottomLeft();
				MOVETO(workspace.activeClient, "BL");
			}
			// client.tiled = true;
		}
	);


	// Left / Right
	registerShortcut(
		"ManualTilingWM_Left",
		"Grid WM: Move >> Left",
		"Meta+Ctrl+A",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileLeft();
				MOVETO(workspace.activeClient, "L");
			}
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_Right",
		"Grid WM: Move >> Right",
		"Meta+Ctrl+D",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileRight();
				MOVETO(workspace.activeClient, "R");
			}
			// client.tiled = true;
		}
	);


	// Top / Bottom / Maximize
	registerShortcut(
		"ManualTilingWM_CenterTop",
		"Grid WM: Move >> Up",
		"Meta+Ctrl+W",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileTop();
				MOVETO(workspace.activeClient, "T");
			}
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_CenterBottom",
		"Grid WM: Move >> Down",
		"Meta+Ctrl+X",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileBottom();
				MOVETO(workspace.activeClient, "B");
			}
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_Center",
		"Grid WM: Move >> Center",
		"Meta+Ctrl+S",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			if (grid_snap_sw == true) {
				// workspace.slotWindowMaximize();
				MOVETO(workspace.activeClient, "C");
			}
			// client.tiled = true;
		}
	);
	// }


	// General
	// registerShortcut(
	//     "ManualTilingWM_Maximize",
	//     "Grid WM: Maximize (With Border)",
	//     "Meta+R",
	//     function () {
	//         move(workspace, 1, 1, 0, 0, 1, 1);
	//     });

	// registerShortcut("MoveWindowToCenter", "Grid WM: Put Center", "ctrl+Num+5", function () {
	//     center(workspace);
	// });




	// Same As Default (Keep Pack Compatibility)
	// Screen Edge Snap When Slot
	function BorderLimit(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		var sz = 1;
		// FIX: Canot Snap To Desktop Border
		// var sz = snap_size;

		// var _x = client.geometry.x;
		// var _y = client.geometry.y;
		// var _w = client.geometry.width;
		// var _h = client.geometry.height;
		var _x = client.x;
		var _y = client.y;
		var _w = client.width;
		var _h = client.height;

		//////// FIX: Screen Change After Split (Resize)
		// FIX: Cannot Input After Split (Resize) (Donot Change Size)
		// Change x, y, 1px Broke Snap (Overlaping)
		var tgap = 1;
		// var tgap = 0;
		if (_x > cp.x - sz && _x < cp.x + sz) {
			_x = cp.x + tgap;
		}
		if (_y > cp.y - sz && _y < cp.y + sz) {
			_y = cp.y + tgap;
		}
		if (_x + client.width > cp.x + cp.width - sz && _x + client.width < cp.x + cp.width + sz) {
			_x = cp.x + cp.width - client.width - tgap;
		}
		if (_y + client.height > cp.y + cp.height - sz && _y + client.height < cp.y + cp.height + sz) {
			_y = cp.y + cp.height - client.height - tgap;
		}

		var g = {
			x: _x,
			y: _y,
			width: _w,
			height: _h,
		};
		client.geometry = g;

		// Change w, h, Glitch
		// var whfix = 1;
		// if ((_x + client.width > cp.x + cp.width - sz && _x + client.width < cp.x + cp.width + sz) ||
		// 	(_y + client.height > cp.y + cp.height - sz && _y + client.height < cp.y + cp.height + sz)) {
		// 	if (finish == true) {
		// 		var g = {
		// 			x: _x,
		// 			y: _y,
		// 			width: _w - whfix,
		// 			height: _h - whfix,
		// 		};
		// 		client.geometry = g;
		// 	}
		// }

		// if (!shallowEquals(client.geometry, g)) client.geometry = g;
	}




	// var snaps = [];
	// var snaps = {};

	function init() {
		var clients = workspace.clientList();
		for (var i = 0; i < clients.length; i++) {
			clientAdded(clients[i]);
		}
		workspace.clientAdded.connect(clientAdded);
		workspace.clientRemoved.connect(clientRemoved);

		// registerShortcut(
		// 	"Float_Group",
		// 	"Grid WM| StickLess (Float Single) / StickAble (Window Group) |Per Window",
		// 	"Meta+Ctrl+V",
		// 	function () {
		// 		var client = workspace.activeClient;
		// 		client.is_window_group = config.is_window_group;
		// 		if (client.is_window_group) {
		// 			client.is_window_group = false;
		// 			findSnap(client, workspace.clientList());
		// 		} else {
		// 			client.is_window_group = true;
		// 			findSnap(client, workspace.clientList());
		// 		}
		// 	}
		// );

		// registerShortcut(
		// 	"Group_Tiling",
		// 	"Grid WM| Near (Window Group) / Far (Tiling Grid) |Per Window",
		// 	"Meta+Ctrl+F",
		// 	function () {
		// 		var client = workspace.activeClient;
		// 		client.is_tiling_grid = config.is_tiling_grid;
		// 		if (client.is_tiling_grid) {
		// 			client.is_tiling_grid = false;
		// 			findSnap(client, workspace.clientList());
		// 		} else {
		// 			client.is_tiling_grid = true;
		// 			findSnap(client, workspace.clientList());
		// 		}
		// 	}
		// );

		// Still Complex
		// registerShortcut(
		// 	"Float_Tile",
		// 	"Grid WM| Float Mode / Tile Mode |Per Window",
		// 	"Meta+Ctrl+V",
		// 	function () {
		// 		var client = workspace.activeClient;
		// 		if (client.is_tile) {
		// 			client.is_tile = false;
		// 			findSnap(client, workspace.clientList());
		// 		} else {
		// 			client.is_tile = true;
		// 			findSnap(client, workspace.clientList());
		// 		}
		// 	}
		// );




		// Use User Setting
		// options.windowSnapZone = 40;
		// FOR: Non Grid Align
		options.windowSnapZone = snap_size;
		// FOR: Performance
		// options.windowSnapZone = 0;

		// FIX: Drag Window To Screen Edge Need Resize First So That It Can Be Border Snap With Other Windows
		// options.borderSnapZone = 40;
		// options.borderSnapZone = 0;
		// FIX: Full Height Align
		// options.borderSnapZone = snap_size / 2;
		// options.borderSnapZone = snap_size;
		// FIX: clientInit BorderLimit Not Working
		options.borderSnapZone = 0;

		// FIX: Confusing
		// options.centerSnapZone = 40;
		options.centerSnapZone = 0;


		// Override System Setting
		if (index_z_fix == true) {
			options.clickRaise = true;
			options.autoRaise = true;
		}
		// Use System Setting
		// if (index_z_fix == false) {
		// 	options.clickRaise = false;
		// 	options.autoRaise = false;
		// }
		options.delayFocusInterval = index_z_delay;
		options.autoRaiseInterval = index_z_delay;




		// Session Restored Window
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			clientInit(wcl[i]);
		}
	}

	// var previous_active_client_id = null;
	// var activate_lock = false;
	// var windowActivated = function (client) {
	// 	// print(client);
	// 	if (client === null) {
	// 		return;
	// 	} else if (previous_active_client_id === null) {
	// 		previous_active_client_id = client.windowId;
	// 	} else if (previous_active_client_id === client.windowId) {
	// 		return;
	// 	}

	// workspace.clientActivated.disconnect(windowActivated);
	// 	// client.activeChanged.disconnect(windowActivated);

	// 	if (activate_lock == true) return;
	// 	// Find First
	// 	var snapsss = findSnap(client, workspace.clientList());

	// 	// print(snapsss);
	// 	if (!snapsss) return;

	// 	activate_lock = true;
	// 	for (var i = 0; i < snapsss.length; i++) {
	// 		// print(snapsss[i].client);
	// 		// snapsss[i].client.active = true;
	// 		// FIX: System Stop Response
	// 		if (workspace.activeClient != client) {
	// 			workspace.activeClient = snapsss[i].client;
	// 			// print(snapsss[i].client);
	// 		}
	// 	}
	// 	activate_lock = false;

	// 	// workspace.clientActivated.connect(windowActivated);
	// 	// client.activeChanged.connect(windowActivated);

	// 	// var i = 0;
	// 	// function forLoop() {
	// 	// 	if (i < snapsss.length) {
	// 	// 		process();
	// 	// 	}
	// 	// }
	// 	// function process() {
	// 	// 	workspace.activeClient = snapsss[i].client;
	// 	// 	i++;
	// 	// 	setTimeout(forLoop(), 500);
	// 	// }
	// 	// forLoop();
	// };

	// var index_z = {};
	var index_z = 0;

	// DoesNot Affect Session Restored Window
	function clientAdded(client) {
		if (client.specialWindow) return;
		if (client.fullScreen) return;


		client.clientStartUserMovedResized.connect(clientStartMouseMovedResized);
		// if (config.liveUpdate)
		client.clientStepUserMovedResized.connect(clientStepMouseMovedResized);
		client.clientFinishUserMovedResized.connect(clientFinishMouseMovedResized);

		client.geometryShapeChanged.connect(geometryShapeChanged);
		client.bufferGeometryChanged.connect(bufferGeometryChanged);
		client.frameGeometryChanged.connect(frameGeometryChanged);
		client.clientGeometryChanged.connect(clientGeometryChanged);


		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	// if (workspace.floatGeometry[client.frameId]) {
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// 	// }
		// }




		// client.clientMinimized.connect(function (client) {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.minimized = true;
		// 	}
		// });
		// client.clientUnminimized.connect(function (client) {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.minimized = false;
		// 	}
		// });

		// workspace.clientMaximizeSet.connect(function (client, h, v) {
		// print("MAX");
		// 	// client.borderlessMaximizedWindows = false;
		// 	// client.geometry = workspace.clientArea(KWin.MaximizeArea, client.screen, client.desktop);
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.maximized = true;
		// 		// snapsss[i].client.geometry = workspace.clientArea(KWin.MaximizeArea, client.screen, client.desktop);
		// 		// callDBus();
		// 	}
		// });
		// workspace.clientRestored.connect(function (client) {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.maximized = false;
		// 	}
		// });

		// client.shadeChanged.connect(function () {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.shade = client.shade;
		// 	}
		// });

		// client.keepAboveChanged.connect(function () {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.keepAbove = client.keepAbove;
		// 		// snapsss[i].client.keepBelow = false;
		// 		// print(snapsss[i].client.keepAbove);
		// 	}
		// });
		// client.keepBelowChanged.connect(function () {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.keepAbove = false;
		// 		snapsss[i].client.keepBelow = client.keepBelow;
		// 		// print(snapsss[i].client.keepBelow);
		// 	}
		// });

		// workspace.currentDesktopChanged.connect(function (desktop, client) {
		// 	if(!client) return;
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.onAllDesktops = client.onAllDesktops;
		// 		snapsss[i].client.desktop = client.desktop;
		// 	}
		// });

		workspace.clientActivated.connect(function () {
			// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
			// ReCheck Snap: FIX: UnWanted Snap
			// findSnap(client, workspace.clientList());

			// print("======");
			// var wcl = workspace.clientList();
			// for (var i = 0; i < wcl.length; ++i) {
			// 	print(wcl[i]);
			// }

			// index_z[client.windowId] = workspace.clientList().length;
			// var wcl = workspace.clientList();
			// for (var i = 0; i < wcl.length; ++i) {
			// 	index_z[wcl[i].windowId] = 
			// }
			// print(index_z[client.windowId]);

			//workspace.activeClient = client;
			//print(workspace.activeClient);

			// // Itis Focus Differrent From Raise Not Correct
			// index_z++;
			// client.index_z = index_z;
			// // print(client.caption, client.index_z);
		});

		client.activeChanged.connect(function () {
			// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
			// ReCheck Snap: FIX: UnWanted Snap
			// 	findSnap(client, workspace.clientList());

			// Itis Focus Differrent From Raise Not Correct
			index_z++;
			client.index_z = index_z;
			// print(client.caption, client.index_z);
			if (index_z >= Number.MAX_VALUE) {
				index_z = 0;
			}

			//workspace.activeClient = client;
			//print(workspace.activeClient);

			// ATDETACH(client, true);
			// SaveGeometry(client);
		});

		client.desktopChanged.connect(function () {
			// print(client.caption, JSON.stringify(client.geometry));
			// print(client.caption, JSON.stringify(client.float_geometry));

			// client.sloted = "NO";
			// client.geometry = client.float_geometry;
			// if (slot == true) {
			// 	ATDETACH(client, client.float_geometry, true);
			// 	// ATDETACH(client, client.float_geometry, false);
			// }
			// SaveGeometry(client);

			// if(!Geometry_FIX[client.windowId]) return;
			// FIX: Size Change After Send Window To Other Desktop
			// client.geometry = Geometry_FIX[client.windowId];
			// print(JSON.stringify(Geometry_FIX[client.windowId]));

			// Not Working
			// var g = {
			// 	x: 1400,
			// 	y: 400,
			// 	width: 400,
			// 	height: 400
			// };
			// client.geometry = g;

			// if (!client.float_geometry) return;
			// client.geometry = client.slot_geometry;
			// client.geometry = client.float_geometry;
			// print(JSON.stringify(client.geometry));

			// client.sloted = "YES";
			// ATDETACH(client, false);
			// ATDETACH(client, true);
			// ATDETACH_Desktop(client, true);
			// SaveGeometry(client);




			// FIX: CanNot Slot After Move To Desktop
			client.sloted = "NO";
		});

		// workspace.currentDesktopChanged.connect(function(){
		// var g = {
		// 	x: 200,
		// 	y: 200,
		// 	width: 200,
		// 	height: 200
		// };
		// workspace.activeClient.geometry = g;

		// workspace.activeClient.geometry = Geometry_FIX[client.windowId];
		// });




		clientInit(client);
	}

	function clientInit(client) {
		client.index_z = 0;
		// client.snap_sw = true;
		client.sloted = "NO";

		client.grid_size_h = 1;
		client.grid_size_v = 1;

		// FIX: Grid Move Stop Working (ATDETACH geometry) (Run Before init_slot_geo)
		calcGridSize(client);
		client.slot_geometry = init_slot_geo(client);
		client.float_geometry = client.geometry;
		// Run After float_geometry
		// calcGridPosition(client);
		calcGridPos_L(client);
		calcGridPos_R(client);
		calcGridPos_T(client);
		calcGridPos_B(client);

		client.prev_geometry = client.geometry;
		// client.resize_direct = "";
	}




	// function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
	// 	var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
	// 	var width;
	// 	if (x == numberXslots) {
	// 		width = Math.floor(maxArea.width / numberXslots);
	// 	} else {
	// 		// FIX: Snap
	// 		// width = Math.ceil(maxArea.width / numberXslots);
	// 		width = Math.floor(maxArea.width / numberXslots);
	// 	}

	// 	var height;
	// 	if (y == numberYslots) {
	// 		height = Math.floor(maxArea.height / numberYslots);
	// 	} else {
	// 		// FIX: Snap
	// 		// height = Math.ceil(maxArea.height / numberYslots);
	// 		height = Math.floor(maxArea.height / numberYslots);
	// 	}

	// 	var newX = maxArea.x + width * x;
	// 	var newY = maxArea.y + height * y;
	// 	return [newX, newY, width * xSlotToFill, height * ySlotToFill]
	// }

	// function reposition(client, newX, newY, w, h) {
	// 	client.geometry = {
	// 		x: newX,
	// 		y: newY,
	// 		width: w,
	// 		height: h
	// 	};
	// }

	// function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
	// 	var client = workspace.activeClient;
	// 	if (client.moveable) {
	// 		arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
	// 		var newX = arr[0],
	// 			newY = arr[1],
	// 			w = arr[2],
	// 			h = arr[3];
	// 		reposition(client, newX, newY, w, h)
	// 	}
	// }

	// function center(workspace) {
	// 	var client = workspace.activeClient;
	// 	if (client.moveable) {
	// 		var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
	// 		var newX = maxArea.x + ((maxArea.width - client.width) / 2);
	// 		var newY = maxArea.y + ((maxArea.height - client.height) / 2);
	// 		reposition(client, newX, newY, client.width, client.height)
	// 	}
	// }




	function RESIZETO_H(client, size) {
		// Skip Desktop Window
		if (client.specialWindow) return;
		if (client.fullScreen) return;


		calcGridSize(client);
		// calcGridPosition(client);
		calcGridPos_L(client);
		calcGridPos_R(client);
		calcGridPos_T(client);
		calcGridPos_B(client);

		Clear_Snap();





		// Enable Keyboard Resize
		snapStarted_Keyboard_Mouse(client);




		if (size > grid_size_h) {
			client.grid_size_h = grid_size_h;
		} else {
			client.grid_size_h = size;
		}

		var cp = workspace.clientArea(workspace.PlacementArea, client);

		var slot_x = client.geometry.x + client.geometry.width / 2 - cp.width / grid_size_h * client.grid_size_h / 2;
		var slot_y = client.geometry.y;

		// Less Keyboard Sequence
		if (grid_center_sw == false) {
			slot_x = client.geometry.x;
			slot_y = client.geometry.y;
		}

		// Same As Default (Keep Pack Compatibility)
		// if (slot_x < cp.x) slot_x = cp.x;
		// if (slot_y < cp.y) slot_y = cp.y;
		// if (slot_x + cp.width / grid_size_h * client.grid_size_h > cp.x + cp.width) slot_x = cp.x + cp.width - cp.width / grid_size_h * client.grid_size_h;
		// if (slot_y + client.geometry.height > cp.y + cp.height) slot_y = cp.y + cp.height - client.geometry.height;

		var g = {
			x: slot_x,
			y: slot_y,
			width: cp.width / grid_size_h * client.grid_size_h,
			height: client.geometry.height,
		};

		// client.x = g.x;
		// client.y = g.y;
		// client.width = g.width;
		// client.height = g.height;
		client.geometry = g;

		if (switch_desktop_fix == true) {
			// FIX: Size Change After Move Window To Desktop
			workspace.slotWindowResize();
		}

		if (client.sloted == "YES") {
			client.slot_geometry = g;
		}
		if (client.sloted == "NO") {
			client.float_geometry = g;
		}
	}

	function RESIZETO_V(client, size) {
		// Skip Desktop Window
		if (client.specialWindow) return;
		if (client.fullScreen) return;


		calcGridSize(client);
		// calcGridPosition(client);
		calcGridPos_L(client);
		calcGridPos_R(client);
		calcGridPos_T(client);
		calcGridPos_B(client);

		Clear_Snap();





		// Enable Keyboard Resize
		snapStarted_Keyboard_Mouse(client);




		if (size > grid_size_v) {
			client.grid_size_v = grid_size_v;
		} else {
			client.grid_size_v = size;
		}

		var cp = workspace.clientArea(workspace.PlacementArea, client);

		var slot_x = client.geometry.x;
		var slot_y = client.geometry.y + client.geometry.height / 2 - cp.height / grid_size_v * client.grid_size_v / 2;

		// Less Keyboard Sequence
		if (grid_center_sw == false) {
			slot_x = client.geometry.x;
			slot_y = client.geometry.y;
		}

		// Same As Default (Keep Pack Compatibility)
		// if (slot_x < cp.x) slot_x = cp.x;
		// if (slot_y < cp.y) slot_y = cp.y;
		// if (slot_x + client.geometry.width > cp.x + cp.width) slot_x = cp.x + cp.width - client.geometry.width;
		// if (slot_y + cp.height / grid_size_v * client.grid_size_v > cp.y + cp.height) slot_y = cp.y + cp.height - cp.height / grid_size_v * client.grid_size_v;

		var g = {
			x: slot_x,
			y: slot_y,
			width: client.geometry.width,
			height: cp.height / grid_size_v * client.grid_size_v,
		};

		// client.x = g.x;
		// client.y = g.y;
		// client.width = g.width;
		// client.height = g.height;
		client.geometry = g;

		if (switch_desktop_fix == true) {
			// FIX: Size Change After Move Window To Desktop
			workspace.slotWindowResize();
		}

		if (client.sloted == "YES") {
			client.slot_geometry = g;
		}
		if (client.sloted == "NO") {
			client.float_geometry = g;
		}
	}




	//////// KWin Script Reset Size After Move To Desktop, So Only Put Position (Not Size) ////////
	// // Use Pack Window
	// function MOVETO(client, direct) {
	// 	var cp = workspace.clientArea(workspace.PlacementArea, client);
	// 	var g;


	// 	if (direct == "TL") {
	// 		g = {
	// 			x: cp.x,
	// 			y: cp.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}
	// 	if (direct == "TR") {
	// 		g = {
	// 			x: cp.width - client.geometry.width + cp.x,
	// 			y: cp.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}
	// 	if (direct == "BR") {
	// 		g = {
	// 			x: cp.width - client.geometry.width + cp.x,
	// 			y: cp.height - client.geometry.height + cp.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}
	// 	if (direct == "BL") {
	// 		g = {
	// 			x: cp.x,
	// 			y: cp.height - client.geometry.height + cp.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}

	// 	if (direct == "C") {
	// 		g = {
	// 			x: cp.width / 2 - client.geometry.width / 2,
	// 			y: cp.height / 2 - client.geometry.height / 2,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}

	// 	if (direct == "L") {
	// 		g = {
	// 			x: cp.x,
	// 			y: client.geometry.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}
	// 	if (direct == "R") {
	// 		g = {
	// 			x: cp.width - client.geometry.width + cp.x,
	// 			y: client.geometry.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}
	// 	if (direct == "T") {
	// 		g = {
	// 			x: client.geometry.x,
	// 			y: cp.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}
	// 	if (direct == "B") {
	// 		g = {
	// 			x: client.geometry.x,
	// 			y: cp.height - client.geometry.height + cp.y,
	// 			width: client.geometry.width,
	// 			height: client.geometry.height,
	// 		};
	// 	}


	// 	client.geometry = g;

	// 	if (switch_desktop_fix == true) {
	// 		// FIX: Size Change After Move Window To Desktop
	// 		workspace.slotWindowMove();
	// 	}

	// 	if (client.sloted == "YES") {
	// 		client.slot_geometry = g;
	// 	}
	// 	if (client.sloted == "NO") {
	// 		client.float_geometry = g;
	// 	}
	// }




	// // var Geometry_FIX = {};
	// function MOVETO(client, direct) {
	// 	if (grid_snap_sw == false) return;

	// 	snapsss[client.windowId] = null;

	// 	// Quick Tile & Edge Snap
	// 	// Mouse Edge Snap & Keyboard Send
	// 	// DoNot move to Half Recursive Call Frozen
	// 	// var cm = workspace.clientArea(workspace.MaximizeArea, client);
	// 	// print(cm.x, cm.y, cm.width, cm.height);

	// 	var cp = workspace.clientArea(workspace.PlacementArea, client);
	// 	// print("Area: ", cp.x, cp.y, cp.width, cp.height);
	// 	// print("Client: ", client.x, client.y, client.width, client.height);
	// 	// print("Floating");

	// 	// move(workspace, numberXslots, numberYslots, SlotPosX, SlotPosY, FillSlotSizeWidth, FillSlotSizeHeight)
	// 	if (direct == "TL") {
	// 		// if (client.x == cp.x && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
	// 		// client.sloted = true;
	// 		// client.sloted = "TL";

	// 		// Tile To The Corner
	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, 1);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, 1);
	// 		} else {
	// 			// move(workspace, grid_size_h, grid_size_v, --client.grid_position_h, --client.grid_position_v, client.grid_size_h, client.grid_size_v);

	// 			MOVETO(client, "L");
	// 			MOVETO(client, "T");

	// 			// client.grid_position_h = 0;
	// 			// client.grid_position_v = 0;
	// 			// move(workspace, grid_size_h, grid_size_v, client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	if (direct == "TR") {
	// 		// if (client.x == cp.width / 2 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
	// 		// client.sloted = true;
	// 		// client.sloted = "TR";

	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, 1);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, 1);
	// 		} else {
	// 			// move(workspace, grid_size_h, grid_size_v, ++client.grid_position_h, --client.grid_position_v, client.grid_size_h, client.grid_size_v);

	// 			MOVETO(client, "R");
	// 			MOVETO(client, "T");

	// 			// client.grid_position_h = grid_size_h - client.grid_size_h;
	// 			// client.grid_position_v = 0;
	// 			// move(workspace, grid_size_h, grid_size_v, client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	if (direct == "BR") {
	// 		// if (client.x == cp.width / 2 && client.y == cp.height / 2 + cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
	// 		// client.sloted = true;
	// 		// client.sloted = "BR";

	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, grid_size_v - 1, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, grid_size_v - 1, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, grid_size_v - 1, 1, 1);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, grid_size_v - 1, 1, 1);
	// 		} else {
	// 			// move(workspace, grid_size_h, grid_size_v, ++client.grid_position_h, ++client.grid_position_v, client.grid_size_h, client.grid_size_v);

	// 			MOVETO(client, "R");
	// 			MOVETO(client, "B");

	// 			// client.grid_position_h = grid_size_h - client.grid_size_h;
	// 			// client.grid_position_v = grid_size_v - client.grid_size_v;
	// 			// move(workspace, grid_size_h, grid_size_v, client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	if (direct == "BL") {
	// 		// if (client.x == cp.x && client.y == cp.height / 2 + cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
	// 		// client.sloted = true;
	// 		// client.sloted = "BL";

	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, 1, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, 1, 1);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, 1, 1);
	// 		} else {
	// 			// move(workspace, grid_size_h, grid_size_v, --client.grid_position_h, ++client.grid_position_v, client.grid_size_h, client.grid_size_v);

	// 			MOVETO(client, "L");
	// 			MOVETO(client, "B");

	// 			// client.grid_position_h = 0;
	// 			// client.grid_position_v = grid_size_v - client.grid_size_v;
	// 			// move(workspace, grid_size_h, grid_size_v, client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}


	// 	if (direct == "L") {
	// 		// if (client.x == cp.x && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
	// 		// client.sloted = true;
	// 		// client.sloted = "L";

	// 		// Tile Left / Right
	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, grid_size_v);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, grid_size_v);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, grid_size_v);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			// Recursive Call With SlotWindow
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, grid_size_v);
	// 		} else if (grid_size_v == 1 || grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, 1, grid_size_v);
	// 		} else {
	// 			// if (client.grid_position_h - 1 <= 0) {
	// 			// 	client.grid_position_h = 0 + 1;
	// 			// }
	// 			if (client.grid_position_h - 1 <= 0 - client.grid_size_h + 1) {
	// 				client.grid_position_h = 0 - client.grid_size_h + 2;
	// 			}

	// 			// move(workspace, grid_size_h, grid_size_v, 0, 1, 1, grid_size_v - 2);
	// 			move(workspace, grid_size_h, grid_size_v, --client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	if (direct == "R") {
	// 		// if (client.x == cp.width / 2 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
	// 		// client.sloted = true;
	// 		// client.sloted = "R";

	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, grid_size_v);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, grid_size_v);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, grid_size_v);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			// Recursive Call With SlotWindow
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, grid_size_v);
	// 		} else if (grid_size_v == 1 || grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 0, 1, grid_size_v);
	// 		} else {
	// 			// if (client.grid_position_h + client.grid_size_h + 1 >= grid_size_h) {
	// 			// 	client.grid_position_h = grid_size_h - client.grid_size_h - 1;
	// 			// }
	// 			if (client.grid_position_h + client.grid_size_h + 1 >= grid_size_h + client.grid_size_h - 1) {
	// 				client.grid_position_h = grid_size_h - 2;
	// 			}

	// 			// move(workspace, grid_size_h, grid_size_v, grid_size_h - 1, 1, 1, grid_size_v - 2);
	// 			move(workspace, grid_size_h, grid_size_v, ++client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}


	// 	if (direct == "T") {
	// 		// if (client.x == cp.x && client.y == cp.y && client.width == cp.width && client.height == cp.height / 2) {
	// 		// client.sloted = true;
	// 		// client.sloted = "T";

	// 		// Tile Center Top / Center Maximize / Center Bottom
	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			// Recursive Call With SlotWindow
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, 1);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, 1);
	// 		} else if (grid_size_h == 1 || grid_size_h == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, 1);
	// 		} else {
	// 			if (client.grid_position_v - 1 <= 0 - client.grid_size_v + 1) {
	// 				client.grid_position_v = 0 - client.grid_size_v + 2;
	// 			}

	// 			// move(workspace, grid_size_h, grid_size_v, 1, 0, grid_size_h - 2, 1);
	// 			move(workspace, grid_size_h, grid_size_v, client.grid_position_h, --client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	if (direct == "B") {
	// 		// if (client.x == cp.x && client.y == cp.height / 2 + cp.y && client.width == cp.width && client.height == cp.height / 2) {
	// 		// client.sloted = true;
	// 		// client.sloted = "B";

	// 		// client.tiled = true;
	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, grid_size_h, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, grid_size_h, 1);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			// Recursive Call With SlotWindow
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, grid_size_h, 1);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, grid_size_h, 1);
	// 		} else if (grid_size_h == 1 || grid_size_h == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, grid_size_v - 1, grid_size_h, 1);
	// 		} else {
	// 			if (client.grid_position_v + client.grid_size_v + 1 >= grid_size_v + client.grid_size_v - 1) {
	// 				client.grid_position_v = grid_size_v - 2;
	// 			}

	// 			// move(workspace, grid_size_h, grid_size_v, 1, grid_size_v - 1, grid_size_h - 2, 1);
	// 			move(workspace, grid_size_h, grid_size_v, client.grid_position_h, ++client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	if (direct == "C") {
	// 		// if (client.x == cp.x && client.y == cp.y && client.width == cp.width && client.height == cp.height) {
	// 		// client.sloted = true;
	// 		// client.sloted = "C";

	// 		// Working With Breeze Some Decoration Not Work eg. GlassWhite-Kv, Plastik
	// 		// client.tiled = true;
	// 		// move(workspace, grid_size_h, grid_size_v, 1, 1, grid_size_h - 2, grid_size_v - 2);

	// 		// client.maximized = false;
	// 		// client.maximizable = false;
	// 		// client.maximizable = true;

	// 		// FIX: Window Maximized, After Tile, Close Window, Open Window
	// 		// Not Work
	// 		// workspace.clientMaximizeSet.connect(function (client, h, v) {
	// 		// 	print("MAX");
	// 		// 	// if (h == true, v == true) {
	// 		// 		client.maximized = false;
	// 		// 	// }
	// 		// });

	// 		// client.geometry = {
	// 		// 	x: cp.width / 4,
	// 		// 	y: cp.y,
	// 		// 	width: cp.width / 2,
	// 		// 	height: cp.height
	// 		// };




	// 		if (grid_size_h == 2 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, grid_size_v);
	// 		} else if (grid_size_h == 1 && grid_size_v == 1) {
	// 			// Recursive Call With SlotWindow
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, grid_size_v);
	// 		} else if (grid_size_h == 1 && grid_size_v == 2) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, grid_size_v);
	// 		} else if (grid_size_h == 2 && grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 0, grid_size_h, grid_size_v);
	// 		} else if (grid_size_h == 2 || grid_size_h == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 0, 1, grid_size_h, grid_size_v - 2);
	// 		} else if (grid_size_v == 2 || grid_size_v == 1) {
	// 			move(workspace, grid_size_h, grid_size_v, 1, 0, grid_size_h - 2, grid_size_v);
	// 		} else {
	// 			// move(workspace, grid_size_h, grid_size_v, 1, 1, grid_size_h - 2, grid_size_v - 2);

	// 			client.grid_position_h = (grid_size_h - client.grid_size_h) / 2;
	// 			client.grid_position_v = (grid_size_v - client.grid_size_v) / 2;
	// 			move(workspace, grid_size_h, grid_size_v, client.grid_position_h, client.grid_position_v, client.grid_size_h, client.grid_size_v);
	// 		}

	// 		// if (grid_size_h == 2 && grid_size_v == 2) {} else if (grid_size_h == 1 && grid_size_v == 1) {} else if (grid_size_h == 1 && grid_size_v == 2) {} else if (grid_size_h == 2 && grid_size_v == 1) {} else {
	// 		// 	move(workspace, grid_size_h, grid_size_v, 1, 1, grid_size_h - 2, grid_size_v - 2);
	// 		// }
	// 	} else {
	// 		// client.sloted = false;
	// 	}
	// 	// if (client.x == cp.width / 4 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
	// 	// print(client.maximized);
	// 	// client.maximized = false;
	// 	// client.maximizable = false;
	// 	// client.maximizable = true;
	// 	// }




	// 	// client.slot_geometry = client.geometry;
	// 	// print("MOVETO: ", client.slot_geometry.x, client.slot_geometry.y, client.slot_geometry.width, client.slot_geometry.height);


	// 	// clientStartMouseMovedResized(client);
	// 	// clientStepMouseMovedResized(client);
	// 	// clientFinishMouseMovedResized(client);

	// 	// client.startGeometry = client.geometry;
	// 	// client.startDesktop = client.desktop;


	// 	// Geometry_FIX[client.windowId] = client.float_geometry;
	// 	// Geometry_FIX[client.windowId] = client.slot_geometry;
	// 	// print(JSON.stringify(client.float_geometry));


	// 	client.slot_geometry = client.geometry;
	// 	print("MOVETO Slot: ", JSON.stringify(client.slot_geometry));
	// 	// if (client.sloted == "NO") {
	// 	var g = {
	// 		x: client.geometry.x + client.slot_geometry.width / 2 - client.float_geometry.width / 2,
	// 		y: client.geometry.y + client.slot_geometry.height / 2 - client.float_geometry.height / 2,
	// 		width: client.float_geometry.width,
	// 		height: client.float_geometry.height
	// 	};
	// 	// print(JSON.stringify(g));
	// 	client.float_geometry = g;
	// 	// print("MOVETO Float: ", JSON.stringify(client.float_geometry));
	// 	// }

	// 	// client.sloted = "YES";
	// 	if (slot_sw == true) {
	// 		// FIX: Doesnot Auto Expand
	// 		ATDETACH(client, false);
	// 		// ATDETACH(client, true);
	// 	}




	// 	if (switch_desktop_fix == true) {
	// 		// FIX: Size Change After Send Window To Other Desktop
	// 		// workspace.slotWindowResize();
	// 		workspace.slotWindowMove();
	// 		// workspace.slotWindowMaximize();
	// 		// workspace.slotSwitchToNextScreen();
	// 		// workspace.slotWindowAbove();
	// 	}
	// }




	function MOVETO(client, direct) {
		// Skip Desktop Window
		if (client.specialWindow) return;
		if (client.fullScreen) return;


		calcGridSize(client);
		// calcGridPosition(client);
		calcGridPos_L(client);
		calcGridPos_R(client);
		calcGridPos_T(client);
		calcGridPos_B(client);

		Clear_Snap();




		// if (slot_sw == true) {
		// 	// FIX: Doesnot Auto Attach / Detach
		// 	if (ATDETACH_Check(client) == true) {
		// 		client.sloted = "NO";
		// 	} else {
		// 		client.sloted = "YES";
		// 	}
		// 	ATDETACH(client, true);
		// }

		if (slot_sw == true) {
			ATDETACH_Keyboard(client);
		}




		var cp = workspace.clientArea(workspace.PlacementArea, client);
		var cellw = cp.width / grid_size_h;
		var cellh = cp.height / grid_size_v;
		// print("Area: ", cp.x, cp.y, cp.width, cp.height);
		// print("Client: ", client.x, client.y, client.width, client.height);
		// print("Floating");

		var _x;
		var _y;

		// var tgph = Math.abs(client.grid_position_h % 1);
		// var tgpv = Math.abs(client.grid_position_v % 1);
		// var tgpl = Math.abs(client.grid_pos_l % 1);
		// var tgpr = Math.abs(client.grid_pos_r % 1);
		// var tgpt = Math.abs(client.grid_pos_t % 1);
		// var tgpb = Math.abs(client.grid_pos_b % 1);
		//         print(tgpl);
		//         print(tgpr);
		//         print(tgpt);
		//         print(tgpb);

		// 		var sz0 = 0;
		// 		var sz1 = 1;
		// Snap To Near Grid First
		// FIX: Not Align Some Time
		// var sz0 = 0.05;
		// var sz1 = 0.95;
		// FIX: calcGridPosition DoesNot Move, Must > client.grid_pos_t (0.08), Conflict With BorderLimit
		// var sz0 = 0.1;
		// var sz1 = 0.9;
		// var sz0 = 0.15;
		// var sz1 = 0.85;
		var szp = 4;


		// Only Snap Keyboard Moving Direction
		if (direct == "T") {
			if (client.y > cellh * Math.floor(client.grid_pos_t) + cp.y - szp &&
				client.y < cellh * Math.floor(client.grid_pos_t) + cp.y + szp) {
				client.grid_t = Math.floor(client.grid_pos_t) - 1;
			} else {
				client.grid_t = Math.floor(client.grid_pos_t);
			}

			if (client.grid_t <= 0 - client.grid_size_v + 1) {
				client.grid_t = 0 - client.grid_size_v + 1;
			}

			_x = client.x;
			_y = cellh * client.grid_t + cp.y;
		}
		if (direct == "B") {
			if (client.y + client.height > cellh * Math.ceil(client.grid_pos_b) + cp.y - szp &&
				client.y + client.height < cellh * Math.ceil(client.grid_pos_b) + cp.y + szp) {
				client.grid_b = Math.ceil(client.grid_pos_b) + 1;
			} else {
				client.grid_b = Math.ceil(client.grid_pos_b);
			}

			if (client.grid_b >= grid_size_v + client.grid_size_v - 1) {
				client.grid_b = grid_size_v + client.grid_size_v - 1;
			}

			_x = client.x;
			_y = cellh * client.grid_b - client.height + cp.y;
		}
		if (direct == "L") {
			if (client.x > cellw * Math.floor(client.grid_pos_l) + cp.x - szp &&
				client.x < cellw * Math.floor(client.grid_pos_l) + cp.x + szp) {
				client.grid_l = Math.floor(client.grid_pos_l) - 1;
			} else {
				client.grid_l = Math.floor(client.grid_pos_l);
			}

			if (client.grid_l <= 0 - client.grid_size_h + 1) {
				client.grid_l = 0 - client.grid_size_h + 1;
			}

			_x = cellw * client.grid_l + cp.x;
			_y = client.y;
		}
		if (direct == "R") {
			if (client.x + client.width > cellw * Math.ceil(client.grid_pos_r) + cp.x - szp &&
				client.x + client.width < cellw * Math.ceil(client.grid_pos_r) + cp.x + szp) {
				client.grid_r = Math.ceil(client.grid_pos_r) + 1;
			} else {
				client.grid_r = Math.ceil(client.grid_pos_r);
			}

			if (client.grid_r >= grid_size_h + client.grid_size_h - 1) {
				client.grid_r = grid_size_h + client.grid_size_h - 1;
			}

			_x = cellw * client.grid_r - client.width + cp.x;
			_y = client.y;
		}




		if (direct == "TL") {
			if (client.y > cellh * Math.floor(client.grid_pos_t) + cp.y - szp &&
				client.y < cellh * Math.floor(client.grid_pos_t) + cp.y + szp) {
				client.grid_t = Math.floor(client.grid_pos_t) - 1;
			} else {
				client.grid_t = Math.floor(client.grid_pos_t);
			}

			if (client.grid_t <= 0 - client.grid_size_v + 1) {
				client.grid_t = 0 - client.grid_size_v + 1;
			}

			if (client.x > cellw * Math.floor(client.grid_pos_l) + cp.x - szp &&
				client.x < cellw * Math.floor(client.grid_pos_l) + cp.x + szp) {
				client.grid_l = Math.floor(client.grid_pos_l) - 1;
			} else {
				client.grid_l = Math.floor(client.grid_pos_l);
			}

			if (client.grid_l <= 0 - client.grid_size_h + 1) {
				client.grid_l = 0 - client.grid_size_h + 1;
			}

			_x = cellw * client.grid_l + cp.x;
			_y = cellh * client.grid_t + cp.y;
		}
		if (direct == "TR") {
			if (client.y > cellh * Math.floor(client.grid_pos_t) + cp.y - szp &&
				client.y < cellh * Math.floor(client.grid_pos_t) + cp.y + szp) {
				client.grid_t = Math.floor(client.grid_pos_t) - 1;
			} else {
				client.grid_t = Math.floor(client.grid_pos_t);
			}

			if (client.grid_t <= 0 - client.grid_size_v + 1) {
				client.grid_t = 0 - client.grid_size_v + 1;
			}

			if (client.x + client.width > cellw * Math.ceil(client.grid_pos_r) + cp.x - szp &&
				client.x + client.width < cellw * Math.ceil(client.grid_pos_r) + cp.x + szp) {
				client.grid_r = Math.ceil(client.grid_pos_r) + 1;
			} else {
				client.grid_r = Math.ceil(client.grid_pos_r);
			}

			if (client.grid_r >= grid_size_h + client.grid_size_h - 1) {
				client.grid_r = grid_size_h + client.grid_size_h - 1;
			}

			_x = cellw * client.grid_r - client.width + cp.x;
			_y = cellh * client.grid_t + cp.y;
		}
		if (direct == "BR") {
			if (client.y + client.height > cellh * Math.ceil(client.grid_pos_b) + cp.y - szp &&
				client.y + client.height < cellh * Math.ceil(client.grid_pos_b) + cp.y + szp) {
				client.grid_b = Math.ceil(client.grid_pos_b) + 1;
			} else {
				client.grid_b = Math.ceil(client.grid_pos_b);
			}

			if (client.grid_b >= grid_size_v + client.grid_size_v - 1) {
				client.grid_b = grid_size_v + client.grid_size_v - 1;
			}

			if (client.x + client.width > cellw * Math.ceil(client.grid_pos_r) + cp.x - szp &&
				client.x + client.width < cellw * Math.ceil(client.grid_pos_r) + cp.x + szp) {
				client.grid_r = Math.ceil(client.grid_pos_r) + 1;
			} else {
				client.grid_r = Math.ceil(client.grid_pos_r);
			}

			if (client.grid_r >= grid_size_h + client.grid_size_h - 1) {
				client.grid_r = grid_size_h + client.grid_size_h - 1;
			}

			_x = cellw * client.grid_r - client.width + cp.x;
			_y = cellh * client.grid_b - client.height + cp.y;
		}
		if (direct == "BL") {
			if (client.y + client.height > cellh * Math.ceil(client.grid_pos_b) + cp.y - szp &&
				client.y + client.height < cellh * Math.ceil(client.grid_pos_b) + cp.y + szp) {
				client.grid_b = Math.ceil(client.grid_pos_b) + 1;
			} else {
				client.grid_b = Math.ceil(client.grid_pos_b);
			}

			if (client.grid_b >= grid_size_v + client.grid_size_v - 1) {
				client.grid_b = grid_size_v + client.grid_size_v - 1;
			}

			if (client.x > cellw * Math.floor(client.grid_pos_l) + cp.x - szp &&
				client.x < cellw * Math.floor(client.grid_pos_l) + cp.x + szp) {
				client.grid_l = Math.floor(client.grid_pos_l) - 1;
			} else {
				client.grid_l = Math.floor(client.grid_pos_l);
			}

			if (client.grid_l <= 0 - client.grid_size_h + 1) {
				client.grid_l = 0 - client.grid_size_h + 1;
			}

			_x = cellw * client.grid_l + cp.x;
			_y = cellh * client.grid_b - client.height + cp.y;
		}




		if (direct == "C") {
			// client.grid_position_h = (grid_size_h - client.grid_size_h) / 2;
			// client.grid_position_v = (grid_size_v - client.grid_size_v) / 2;

			// _x = cellw * client.grid_position_h + cp.x;
			// _y = cellh * client.grid_position_v + cp.y;

			_x = (cp.width - client.width) / 2 + cp.x;
			_y = (cp.height - client.height) / 2 + cp.y;

			var gc = {
				x: _x,
				y: _y,
				width: client.width,
				height: client.height,
			};
			client.geometry = gc;

			return;
		}




		var g = {
			x: _x,
			y: _y,
			width: client.width,
			height: client.height,
		};
		client.geometry = g;
		// print(JSON.stringify(g));

		// if (client.grid_position_h <= 0) {
		// 	client.grid_position_h = 0;
		// }
		// if (client.grid_position_h >= grid_size_h) {
		// 	client.grid_position_h = grid_size_h;
		// }

		// if (client.grid_position_v <= 0) {
		// 	client.grid_position_v = 0;
		// }
		// if (client.grid_position_v >= grid_size_v) {
		// 	client.grid_position_v = grid_size_v;
		// }

		// SaveGeometry(client);




		// client.slot_geometry = client.geometry;
		// // print("MOVETO Slot: ", JSON.stringify(client.slot_geometry));
		// // if (client.sloted == "NO") {
		// var fg = {
		// 	x: client.geometry.x + client.slot_geometry.width / 2 - client.float_geometry.width / 2,
		// 	y: client.geometry.y + client.slot_geometry.height / 2 - client.float_geometry.height / 2,
		// 	width: client.float_geometry.width,
		// 	height: client.float_geometry.height
		// };
		// // print(JSON.stringify(g));
		// client.float_geometry = fg;
		// // print("MOVETO Float: ", JSON.stringify(client.float_geometry));
		// // }




		// if (slot_sw == true) {
		// // FIX: Doesnot Auto Attach / Detach
		// if (ATDETACH_Check(client) == true) {
		// 	// FIX: Doesnot Move (ATDETACH)
		// 	client.float_geometry = client.geometry;
		// 	client.sloted = "NO";
		// }
		// if (ATDETACH_Check(client) == false) {
		// 	// FIX: Doesnot Move (ATDETACH)
		// 	client.slot_geometry = client.geometry;
		// 	client.sloted = "YES";
		// }

		// ATDETACH(client, false);
		// ATDETACH(client, true);
		// }

		if (slot_sw == true) {
			ATDETACH_Keyboard(client);
		}

		// SaveGeometry(client);




		if (switch_desktop_fix == true) {
			// FIX: Size Change After Send Window To Other Desktop
			// workspace.slotWindowResize();
			workspace.slotWindowMove();
			// workspace.slotWindowMaximize();
			// workspace.slotSwitchToNextScreen();
			// workspace.slotWindowAbove();
		}




		// FIX: Sloted Position
		// calcGridSize(client);
		// Comment: floor ceil
		// calcGridPosition(client);
		calcGridPos_L(client);
		calcGridPos_R(client);
		calcGridPos_T(client);
		calcGridPos_B(client);
	}

	function Clear_Snap() {
		// Disable Sticky Resize
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			var ti = wcl[i].windowId;
			// FIX: undefined Error
			snapsss[ti] = null;
			// snapsss[ti].length = 0;
			// snapsss[ti] = [];
		}
	}

	function ATDETACH_Check_Keyboard(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// FIX: Slot Align To Border
		// var sz = options.windowSnapZone;
		var sz = snap_size;
		// FIX: Keyboard Float Border Align To 0 / Max
		// var sz = 0;
		// FIX: Slot Size == Float Size With Math.round Math.floor, MOVETO Left Right Not Same
		// var sz = 4;
		// print("Check:", client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2, cp.x + sz);
		// FIX: Float -> Slot Border Align Not Correct (Minus Value)
		if ((client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2 < cp.x + sz ||
				client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2 + client.slot_geometry.width > cp.x + cp.width - sz) ||
			(client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2 < cp.y + sz ||
				client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2 + client.slot_geometry.height > cp.y + cp.height - sz)) {
			// print("Attached");

			// FIX: Not Auto Expand After Swap
			// client.sloted = "YES";
			atdetached = true;
			return true;
		} else {
			// print("Detached");

			// FIX: Not Auto Expand After Swap
			// client.sloted = "NO";
			atdetached = false;
			return false;
		}
	}

	function ATDETACH_Keyboard(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// if (client.sloted != "YES" && ATDETACH_Check_Keyboard(client)) {
		if (ATDETACH_Check_Keyboard(client)) {
			var cfgw = client.geometry.width;
			var cfgh = client.geometry.height;
			var csgw = client.slot_geometry.width;
			var csgh = client.slot_geometry.height;
			if (csgw > cfgw) csgw = cfgw;
			if (csgh > cfgh) csgh = cfgh;

			// print("Attach:", client.geometry.x, cfgw, csgw);

			var slot_x = client.geometry.x + cfgw / 2 - csgw / 2;
			var slot_y = client.geometry.y + cfgh / 2 - csgh / 2;
			// if (slot_x < cp.x) slot_x = cp.x;
			// if (slot_y < cp.y) slot_y = cp.y;
			// if (slot_x + csgw > cp.x + cp.width) slot_x = cp.x + cp.width - csgw;
			// if (slot_y + csgh > cp.y + cp.height) slot_y = cp.y + cp.height - csgh;

			// client.float_geometry = client.geometry;
			var g = {
				x: slot_x,
				y: slot_y,
				width: csgw,
				height: csgh
			};
			client.geometry = g;
			client.slot_geometry = g;

			client.sloted = "YES";

			// if (client.sloted == "YES") {
			// 	if (slot_x < cp.x) slot_x = cp.x;
			// 	if (slot_y < cp.y) slot_y = cp.y;
			// 	if (slot_x + csgw > cp.x + cp.width) slot_x = cp.x + cp.width - csgw;
			// 	if (slot_y + csgh > cp.y + cp.height) slot_y = cp.y + cp.height - csgh;

			// 	var g = {
			// 		x: slot_x,
			// 		y: slot_y,
			// 		width: csgw,
			// 		height: csgh
			// 	};
			// 	client.geometry = g;
			// }

			// Prevent Fall In To Next Condition
			// return;
		}


		// if (client.sloted != "NO" && !ATDETACH_Check_Keyboard(client)) {
		if (!ATDETACH_Check_Keyboard(client)) {
			var csgw = client.geometry.width;
			var csgh = client.geometry.height;
			var cfgw = client.float_geometry.width;
			var cfgh = client.float_geometry.height;
			if (cfgw < csgw) cfgw = csgw;
			if (cfgh < csgh) cfgh = csgh;

			// print("Detach:", client.geometry.x, csgw, cfgw);

			var float_x = client.geometry.x + csgw / 2 - cfgw / 2;
			var float_y = client.geometry.y + csgh / 2 - cfgh / 2;
			// if (float_x < cp.x) float_x = cp.x;
			// if (float_y < cp.y) float_y = cp.y;
			// if (float_x + cfgw > cp.x + cp.width) float_x = cp.x + cp.width - cfgw;
			// if (float_y + cfgh > cp.y + cp.height) float_y = cp.y + cp.height - cfgh;

			// client.slot_geometry = client.geometry;
			var g = {
				x: float_x,
				y: float_y,
				width: cfgw,
				height: cfgh
			};
			client.geometry = g;
			client.float_geometry = g;

			client.sloted = "NO";

			// if (client.sloted == "NO") {
			// 	if (float_x < cp.x) float_x = cp.x;
			// 	if (float_y < cp.y) float_y = cp.y;
			// 	if (float_x + cfgw > cp.x + cp.width) float_x = cp.x + cp.width - cfgw;
			// 	if (float_y + cfgh > cp.y + cp.height) float_y = cp.y + cp.height - cfgh;

			// 	var g = {
			// 		x: float_x,
			// 		y: float_y,
			// 		width: cfgw,
			// 		height: cfgh
			// 	};
			// 	client.geometry = g;
			// }

			// Prevent Fall In To Next Condition
			// return;
		}


		// FIX: Sloted Position
		// calcGridSize(client);
		// calcGridPosition(client);
	}

	// function SlotLimit(client) {
	// 	// if (client.sloted == "YES") {
	// 	// if (ATDETACH_Check_Keyboard(client)) {
	// 	var cp = workspace.clientArea(workspace.PlacementArea, client);

	// 	var slot_x = client.geometry.x;
	// 	var slot_y = client.geometry.y;
	// 	if (slot_x < cp.x) slot_x = cp.x;
	// 	if (slot_y < cp.y) slot_y = cp.y;
	// 	if (slot_x + client.geometry.width > cp.x + cp.width) slot_x = cp.x + cp.width - client.geometry.width;
	// 	if (slot_y + client.geometry.height > cp.y + cp.height) slot_y = cp.y + cp.height - client.geometry.height;

	// 	var g = {
	// 		x: slot_x,
	// 		y: slot_y,
	// 		width: client.slot_geometry.width,
	// 		height: client.slot_geometry.height,
	// 	};
	// 	client.geometry = g;
	// 	// }
	// }




	// function recursiveFind(client) {
	// 	var nearclist = findSnap(client, workspace.clientList());
	// 	if (!nearclist) return;

	// 	for (var i = 0; i < nearclist.length; i++) {
	// 		print(nearclist[i].client);

	// 		recursiveFind(nearclist[i].client);
	// 	}

	// 	nearclist.pop(client);
	// }

	function clientRemoved(client) {
		// 	var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	var i = 0;
		// 	while (i < snapsss.length) {
		// 		if (snapsss[i].client === client) {
		// 			snapsss.splice(i, 1);
		// 		} else {
		// 			++i;
		// 		}
		// 	}
	}

	function init_slot_geo(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// var g = {
		// 	x: client.geometry.x + client.geometry.width / 2 - cp.width / (grid_size_h - client.grid_size_h + 1) / 2,
		// 	y: client.geometry.y + client.geometry.height / 2 - cp.height / (grid_size_v - client.grid_size_v + 1) / 2,
		// 	width: cp.width / (grid_size_h - client.grid_size_h + 1),
		// 	height: cp.height / (grid_size_v - client.grid_size_v + 1),
		// };

		var g = {
			x: client.geometry.x + client.geometry.width / 2 - (cp.width / grid_size_h) / 2,
			y: client.geometry.y + client.geometry.height / 2 - (cp.height / grid_size_v) / 2,
			width: cp.width / grid_size_h,
			height: cp.height / grid_size_v,
		};
		return g;
	}




	function snapStarted_Keyboard_Mouse(client) {
		if (tiling_sw == false) return;


		// Danger: Trigger Only Current
		// if (client.resize) {
		// if (!client.move) {
		// FIX: Move To Tile, Resize, Layout Changed
		// FIX: Move To Float, Resize, Layout Changed
		client.startGeometry = client.geometry;
		// client.startGeometry = JSON.parse(JSON.stringify(client.geometry));
		client.startDesktop = client.desktop;

		// 	clientResized(client, client.geometry);
		// }
		// }




		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// FIX: Recursive Resize
		// Must Check & Save Before Resize
		// Check Each Window Snaps, Save To All Window Array
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			var ti = wcl[i].windowId;

			// print("Snap On", split_sted);

			if (split_sted == false && swap_sted == false) {
				snapsss[ti] = findSnap(wcl[i], wcl);
				// print(JSON.stringify(snapsss[ti]));
				// print(snapsss[ti]);
			}

			if (split_sted == true || swap_sted == true) {
				// FIX: undefined Error
				snapsss[ti] = null;
				// snapsss[ti].length = 0;
				// snapsss[ti] = [];
			}

			// print("SnapList: ", snapsss[ti].length);
		}

		disableOverlaping(client);
	}




	function findSnap(client, clients) {
		// Not Work With Interactive Console
		// if (split_sted == true) return;

		// Reset All Opacity
		for (var i = 0; i < clients.length; i++) {
			clients[i].opacity = 1;
		}

		// Error: Move To Tile, Resize, Layout Changed
		// Error: Move To Float, Resize, Layout Changed
		// client.startGeometry = client.geometry;

		// If Focus Is Tile Continue
		// if (!client.is_window_group) return;

		// client.snaps = [];
		// var clients = clients;
		// print(client);

		// snaps[client.windowId] = [];
		// FIX: Some Window DoesNot Resize
		// snaps[client.windowId].length = 0;

		// FIX: TypeError: Result of expression 'client.geometry' [undefined] is not an object.
		if (!client) return;
		if (!client.geometry) return;

		var l1 = client.geometry.x;
		var r1 = client.geometry.width + client.geometry.x;
		var t1 = client.geometry.y;
		var b1 = client.geometry.height + client.geometry.y;

		var tsnaps = [];

		for (var i = 0; i < clients.length; i++) {
			// If Target Is Tile Continue
			// if (!clients[i].is_window_group) continue;

			// print(clients[i]);
			if (!clients[i]) continue;
			if (!clients[i].geometry) continue;
			// print(clients[i]);

			var l2 = clients[i].geometry.x;
			var r2 = clients[i].geometry.width + clients[i].geometry.x;
			var t2 = clients[i].geometry.y;
			var b2 = clients[i].geometry.height + clients[i].geometry.y;

			// print(client);

			if (clients[i] == client) continue;
			if (clients[i].specialWindow) continue;
			if (clients[i].fullScreen) continue;
			// FIX: Conflict With Simple Window Groups (Show On All Desktop & Activies)
			// Prevent Resize Window Together Inside Differrent Desktop
			if (clients[i].desktop !== workspace.currentDesktop) continue;
			if (clients[i].screen !== client.screen) continue;
			// if (config.ignoreShaded && c.shade) continue;
			if (config.ignoreMaximized && shallowEquals(clients[i].geometry, workspace.clientArea(workspace.MaximizeArea, clients[i]))) continue;
			if (clients[i].activities.length !== 0 && clients[i].activities.indexOf(workspace.currentActivity) === -1) continue;
			if (clients[i].minimized == true) continue;

			// print(client);


			// clients[i].lr = false;
			// clients[i].rl = false;
			// clients[i].tb = false;
			// clients[i].bt = false;

			// clients[i].ll = false;
			// clients[i].rr = false;
			// clients[i].tt = false;
			// clients[i].bb = false;

			// clients[i].test = "TEST";

			// Save To Object Differrent
			// FIX: (snap.lr || snap.rl) undefined
			var snap = {
				lr: false,
				rl: false,
				tb: false,
				bt: false,

				ll: false,
				rr: false,
				tt: false,
				bb: false,

				client: clients[i],
				// startGeometry: c.geometry
			};





			// FIX: Window Size DoesNot Change
			// var sz = options.windowSnapZone * 2;
			// FIX: Layout Window Size Change
			// Easy Snap Tiling Layout, But Mess Up Floating Window
			// var sz = options.windowSnapZone;

			// var sz = 0;
			// FIX: Glitch
			//////// FIX: Too Strict Sticky Resize Broken (Screen Change After Split FIX)
			// var sz = 4;
			// Test
			// var sz = 100;

			var sz = snap_size;


			// If Focus Is Far
			// Main In Left
			if ((r1 >= (l2 - sz)) && (r1 <= (l2 + sz))) {
				snap.rl = true;
			}
			// Main In Right
			if ((l1 >= (r2 - sz)) && (l1 <= (r2 + sz))) {
				snap.lr = true;
			}

			// Main In Bottom
			if ((t1 >= (b2 - sz)) && (t1 <= (b2 + sz))) {
				snap.tb = true;
			}
			// Main In Top
			if ((b1 >= (t2 - sz)) && (b1 <= (t2 + sz))) {
				snap.bt = true;
			}

			// //////// Line ////////
			if ((l1 >= (l2 - sz)) && (l1 <= (l2 + sz))) {
				snap.ll = true;
			}
			if ((r1 >= (r2 - sz)) && (r1 <= (r2 + sz))) {
				snap.rr = true;
			}

			if ((t1 >= (t2 - sz)) && (t1 <= (t2 + sz))) {
				snap.tt = true;
			}
			if ((b1 >= (b2 - sz)) && (b1 <= (b2 + sz))) {
				snap.bb = true;
			}


			// //////// Line ////////
			// if (snap.ll && (t1 == b2 || b1 == t2)) snap.ll = true;
			// if (snap.rr && (t1 == b2 || b1 == t2)) snap.rr = true;

			// if (snap.tt && (l1 == r2 || r1 == l2)) snap.tt = true;
			// if (snap.bb && (l1 == r2 || r1 == l2)) snap.bb = true;

			// print(snap.client.caption);

			// print("LR", snap.lr);
			// print("RL", snap.rl);
			// print("TB", snap.tb);
			// print("BT", snap.bt);

			// print("LL", snap.ll);
			// print("RR", snap.rr);
			// print("TT", snap.tt);
			// print("BB", snap.bb);




			var cp = workspace.clientArea(workspace.PlacementArea, client);

			//////////////// One Far Mode Sticky With Float, So Corner Near Mode ////////////////
			//////////////// Corner Near Mode CanNot Resize Far Window, Need Recursive Check & Resize ////////////////
			// If Snapped
			// if (snap.lr || snap.ll || snap.rl || snap.rr || snap.tb || snap.tt || snap.bt || snap.bb) {
			// FIX: (snap.lr || snap.rl) undefined
			// if (!(snap.lr == undefined && snap.ll == undefined && snap.rl == undefined && snap.rr == undefined && snap.tb == undefined && snap.tt == undefined && snap.bt == undefined && snap.bb == undefined)) continue;
			if (
				// snap &&
				// snap.client.is_tile &&
				// snap.client.is_tile && client.is_tile &&
				// (
				// Style Control
				// Three Snap Window, Resize Side Window, Resize All
				// One Easy For Layout, Hard To Float
				// snap.lr ||
				// snap.rl ||
				// snap.tb ||
				// snap.bt ||

				// Only Near
				// Disable X Corner Snap
				// ((snap.lr || snap.rl) && (snap.tb || snap.bt)) ||

				// Only Near
				// No Cross: RESIZETO SomeTimes Bigger, So sz Here
				(snap.rl && ((t1 > t2 + sz && t1 < b2 - sz) || (b1 > t2 + sz && b1 < b2 - sz))) ||
				(snap.rl && ((t2 > t1 + sz && t2 < b1 - sz) || (b2 > t1 + sz && b2 < b1 - sz))) ||
				(snap.lr && ((t1 > t2 + sz && t1 < b2 - sz) || (b1 > t2 + sz && b1 < b2 - sz))) ||
				(snap.lr && ((t2 > t1 + sz && t2 < b1 - sz) || (b2 > t1 + sz && b2 < b1 - sz))) ||

				(snap.bt && ((l1 > l2 + sz && l1 < r2 - sz) || (r1 > l2 + sz && r1 < r2 - sz))) ||
				(snap.bt && ((l2 > l1 + sz && l2 < r1 - sz) || (r2 > l1 + sz && r2 < r1 - sz))) ||
				(snap.tb && ((l1 > l2 + sz && l1 < r2 - sz) || (r1 > l2 + sz && r1 < r2 - sz))) ||
				(snap.tb && ((l2 > l1 + sz && l2 < r1 - sz) || (r2 > l1 + sz && r2 < r1 - sz))) ||

				// Same Side
				// snap.ll ||
				// snap.rr ||
				// snap.tt ||
				// snap.bb ||

				// Only Near
				(snap.ll && (snap.tb || snap.bt)) ||
				(snap.rr && (snap.tb || snap.bt)) ||
				(snap.tt && (snap.lr || snap.rl)) ||
				(snap.bb && (snap.lr || snap.rl)) ||

				// Parallel Side, But Exclude Full Height Stacked Window
				// ((snap.tt && snap.bb) && snap.client.height != cp.height) ||
				// ((snap.ll && snap.rr) && snap.client.width != cp.width) ||

				// Only Near
				((snap.tt && snap.bb) && (snap.lr || snap.rl) && snap.client.height != cp.height) ||
				((snap.ll && snap.rr) && (snap.tb || snap.bt) && snap.client.width != cp.width)
				// )
			) {
				// snaps.push(snap);
				// if (!snaps[client.windowId]) continue;
				// if (!snaps[client.windowId].indexOf(snap.client.windowId)) continue;
				// snaps[client.windowId].push(snap);
				// if (snap.client.snap_sw) {
				// tsnaps.push(snap);
				// }
				// snap.snap_sw = true;
				// snap.client.snap_sw = true;
				tsnaps.push(snap);
				// print(snap.client.caption);

				// snap.client.geometry = {
				// 	x: 500,
				// 	y: 500,
				// 	width: snap.client.geometry.width,
				// 	height: snap.client.geometry.height,
				// };




				// Condition Passed Set Opacity
				snap.client.opacity = config.opacity;

				// for (var i = 0; i < snaps[client.windowId].length; i++) {
				// print(snaps[client.windowId][i].client);
				// }
				// print(snaps[client.windowId].length);

				// workspace.showOutline(snap.client.geometry);
				// hideOutline();

				// TypeError: Result of expression 'client.snaps' [undefined] is not an object.
				// client.snaps.push(snap);
				// for (var i = 0; i < client.snaps.length; i++) {
				// 	print(snaps[i]);
				// }

				// print(snap.client);
				// Recursive
				// findSnap(snap.client, clients);
			}
		}




		// // Differrent Side Tiling Below
		// var remv = [];
		// for (var b = 0; b < tsnaps.length; b++) {
		// 	var base = tsnaps[b];
		// 	if (!base) continue;
		// 	base.is_tile = true;
		// 	// print(base.client.caption, base.client.index_z);

		// 	for (var c = 0; c < tsnaps.length; c++) {
		// 		var child = tsnaps[c];
		// 		if (!child) continue;

		// 		if (base.client == child.client) continue;

		// 		if (Overlaping(base.client, child.client)) {
		// 			// if (
		// 			// 	(snap.lr && tsnaps[i].lr) ||
		// 			// 	(snap.rl && tsnaps[i].rl) ||
		// 			// 	(snap.tb && tsnaps[i].tb) ||
		// 			// 	(snap.bt && tsnaps[i].bt) ||

		// 			// 	(snap.ll && tsnaps[i].ll) ||
		// 			// 	(snap.rr && tsnaps[i].rr) ||
		// 			// 	(snap.tt && tsnaps[i].tt) ||
		// 			// 	(snap.bb && tsnaps[i].bb)
		// 			// ) {
		// 			if (base.client.index_z > child.client.index_z) {
		// 				// print(base.client.caption, base.client.index_z);
		// 				// if (remv.includes(base) == undefined || remv.includes(base) == false) {
		// 				// 	remv.push(base);
		// 				// }
		// 				// tsnaps[b] = null;
		// 				base.is_tile = false;
		// 			} else if (base.client.index_z < child.client.index_z) {
		// 				// print(child.client.caption, child.client.index_z);
		// 				// if (remv.includes(child) == undefined || remv.includes(child) == false) {
		// 				// 	remv.push(child);
		// 				// }
		// 				// tsnaps[c] = null;
		// 				child.is_tile = false;
		// 			}
		// 			// }
		// 		}
		// 	}
		// }
		// // print("================");
		// // for (var r = 0; r < remv.length; r++) {
		// // 	print(remv[r].client.caption, remv[r].client.index_z);
		// // 	tsnaps.pop(remv[r]);
		// // }
		// // print(tsnaps.length);

		// Same Side Overlap Float Above
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			// if(!index_z_fix) continue;

			if (
				// (wcl[i].specialWindow) ||
				// (wcl[i].fullScreen) ||
				(wcl[i].desktop != workspace.currentDesktop) ||
				(wcl[i].screen != client.screen) ||
				(wcl[i].minimized == true) ||
				// (config.ignoreShaded && c.shade) ||
				// (config.ignoreMaximized && shallowEquals(wcl[i].geometry, workspace.clientArea(workspace.MaximizeArea, wcl[i]))) ||
				(wcl[i].activities.length != 0 && wcl[i].activities.indexOf(workspace.currentActivity) == -1)
			) {
				// wcl[i].is_tile = false;
				// print(wcl[i].caption, wcl[i].desktop, workspace.currentDesktop, wcl[i].is_tile);
				continue;
			}


			if (client == wcl[i]) continue;


			if (Overlaping(client, wcl[i])) {
				// if (
				// 	(snap.lr && tsnaps[i].lr) ||
				// 	(snap.rl && tsnaps[i].rl) ||
				// 	(snap.tb && tsnaps[i].tb) ||
				// 	(snap.bt && tsnaps[i].bt) ||

				// 	(snap.ll && tsnaps[i].ll) ||
				// 	(snap.rr && tsnaps[i].rr) ||
				// 	(snap.tt && tsnaps[i].tt) ||
				// 	(snap.bb && tsnaps[i].bb)
				// ) {
				// var sczi = client.index_z;
				// var tczi = wcl[i].index_z;
				// if (sczi > tczi) {
				// tsnaps[i].snap_sw = true;
				// tsnaps[i].client.snap_sw = true;
				// snap.snap_sw = false;
				// client.snap_sw = false;
				// tsnaps.pop(tsnaps[i]);
				tsnaps = [];
				// } else {
				// tsnaps[i].snap_sw = false;
				// tsnaps[i].client.snap_sw = false;
				// snap.snap_sw = true;
				// client.snap_sw = true;
				// }
				// }

				// print(client.caption, wcl[i].caption);
			}
		}




		// FIX: Stop Responsive
		// clients.pop(client);
		// recursiveList.pop(client);
		// return snaps[client.windowId];

		// print("================");
		return tsnaps;
	}

	//////// Recursive Disable Some Overlay OR Global Disable All Overlap Both Not Good Enough, Should Use Overlap And Snap To Select Float Or Tiling (Overlap Top Is Float, Snap Bottom Is Tile) ////////
	function disableOverlaping(client) {
		// if(!index_z_fix) return;

		// Differrent Side Tiling Below
		// var remv = [];
		// Cannot Cover Some Recursive Case
		// for (var i = 0; i < tsnaps.length; i++) {
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			if (!wcl[i]) continue;
			wcl[i].is_tile = true;
			// print(wcl[i]);


			// if (
			// 		// (wcl[i] != client) &&
			// 		(
			// 			// (wcl[i].specialWindow) ||
			// 			// (wcl[i].fullScreen) ||
			// 			(wcl[i].desktop != workspace.currentDesktop) ||
			// 			(wcl[i].screen != client.screen)
			// 			// (config.ignoreShaded && c.shade) ||
			// 			// (config.ignoreMaximized && shallowEquals(wcl[i].geometry, workspace.clientArea(workspace.MaximizeArea, wcl[i]))) ||
			// 			// (wcl[i].activities.length !== 0 && wcl[i].activities.indexOf(workspace.currentActivity) === -1)
			// 			)
			// 	) {
			// 		// wcl[i].is_tile = false;
			// 		print(wcl[i].caption, wcl[i].desktop, workspace.currentDesktop, wcl[i].is_tile);
			// 		continue;
			// 	}


			var wcl_child = workspace.clientList();
			for (var c = 0; c < wcl_child.length; c++) {
				if (!wcl_child[c]) continue;
				// if (!wcl_child[c].is_tile) continue;
				// print(wcl_child[c].caption, wcl_child[c].is_tile);

				// print(Overlaping(wcl[i], wcl_child[c]));
				// print("Minimized:", wcl_child[c].caption, wcl_child[c].minimized);


				if (
					// (wcl_child[c] != client) &&
					(
						// (wcl_child[c].specialWindow) ||
						// (wcl_child[c].fullScreen) ||
						(wcl_child[c].desktop != workspace.currentDesktop) ||
						(wcl_child[c].screen != client.screen) ||
						(wcl_child[c].minimized == true) ||
						// (config.ignoreShaded && c.shade) ||
						// (config.ignoreMaximized && shallowEquals(wcl_child[c].geometry, workspace.clientArea(workspace.MaximizeArea, wcl_child[c]))) ||
						(wcl_child[c].activities.length != 0 && wcl_child[c].activities.indexOf(workspace.currentActivity) == -1)
					)
				) {
					// wcl_child[c].is_tile = false;
					// print(wcl_child[c].caption, wcl_child[c].desktop, workspace.currentDesktop, wcl_child[c].is_tile);
					continue;
				}


				// KWin API DoesNot Have Raise Event, Focus Based index_z Here
				// So, Canot Tiling Resize Below Layer With Manual Raise Mode (When There Has Overlaped Window Above Main Window)
				if (Overlaping(wcl[i], wcl_child[c])) {
					if (wcl[i].index_z > wcl_child[c].index_z) {
						wcl[i].is_tile = false;

						// print("Overlaping: ", wcl[i].caption);
					}
					// if (wcl[i].index_z < wcl_child[c].index_z) {
					// 	wcl_child[c].is_tile = false;
					// }
				}
			}
			// print("================");
		}
		// print("================");
		// for (var r = 0; r < remv.length; r++) {
		// 	print(remv[r].client.caption, remv[r].client.index_z);
		// 	tsnaps.pop(remv[r]);
		// }
		// print(tsnaps.length);
	}

	function Overlaping(current, target) {
		// var cgX = current.geometry.x;
		// var cgY = current.geometry.y;
		// var cgW = current.geometry.width;
		// var cgH = current.geometry.height;

		// var tgX = target.geometry.x;
		// var tgY = target.geometry.y;
		// var tgW = target.geometry.width;
		// var tgH = target.geometry.height;

		// var cgL = cgX;
		// var cgR = cgX + cgW;
		// var cgT = cgY;
		// var cgB = cgY + cgH;

		// var tgL = tgX;
		// var tgR = tgX + tgW;
		// var tgT = tgY;
		// var tgB = tgY + tgH;

		// var snap = {
		// 	lr: false,
		// 	rl: false,
		// 	tb: false,
		// 	bt: false,

		// 	ll: false,
		// 	rr: false,
		// 	tt: false,
		// 	bb: false,
		// };

		// if (cgX + cgW == tgX) snap.lr = true;
		// if (cgX == tgX + tgW) snap.rl = true;
		// if (cgY + cgH == tgY) snap.tb = true;
		// if (cgY == tgY + tgH) snap.bt = true;

		// if (cgX == tgX) snap.ll = true;
		// if (cgX + cgW == tgX + tgW) snap.rr = true;
		// if (cgY == tgY) snap.tt = true;
		// if (cgY + cgH == tgY + tgH) snap.bb = true;

		// if (
		// 	(snap.ll && ((cgT > tgT && cgT < tgB) || (cgB > tgT && cgB < tgB))) ||
		// 	(snap.ll && ((tgT > cgT && tgT < cgB) || (tgB > cgT && tgB < cgB))) ||
		// 	(snap.rr && ((cgT > tgT && cgT < tgB) || (cgB > tgT && cgB < tgB))) ||
		// 	(snap.rr && ((tgT > cgT && tgT < cgB) || (tgB > cgT && tgB < cgB))) ||

		// 	(snap.tt && ((cgL > tgL && cgL < tgR) || (cgR > tgL && cgR < tgR))) ||
		// 	(snap.tt && ((tgL > cgL && tgL < cgR) || (tgR > cgL && tgR < cgR))) ||
		// 	(snap.bb && ((cgL > tgL && cgL < tgR) || (cgR > tgL && cgR < tgR))) ||
		// 	(snap.bb && ((tgL > cgL && tgL < cgR) || (tgR > cgL && tgR < cgR)))
		// ) {
		// 	// print(current.caption, current.index_z, " | ", target.caption, target.index_z);
		// 	return true;
		// } else {
		// 	// print("Not Overlaping");
		// 	return false;
		// }




		// print((tgX == cgX) && (cgY < tgY + tgH) && (cgY + cgH > tgY));
		// print((tgX + tgW == cgX + cgW) && (cgY < tgY + tgH) && (cgY + cgH > tgY));
		// print((tgY == cgY) && (cgX < tgX + tgW) && (cgX + cgW > tgX));
		// print((tgY + tgH == cgY + cgH) && (cgX < tgX + tgW) && (cgX + cgW > tgX));

		// if (
		// 	(tgX == cgX) && (cgY < tgY + tgH) && (cgY + cgH > tgY) ||
		// 	(tgX + tgW == cgX + cgW) && (cgY < tgY + tgH) && (cgY + cgH > tgY) ||
		// 	(tgY == cgY) && (cgX < tgX + tgW) && (cgX + cgW > tgX) ||
		// 	(tgY + tgH == cgY + cgH) && (cgX < tgX + tgW) && (cgX + cgW > tgX)
		// ) {
		// 	print(current.caption, current.index_z, " | ", target.caption, target.index_z);
		// 	return true;
		// } else {
		// 	// print("Not Overlaping");
		// 	return false;
		// }




		// var g = current.geometry;
		// var num = 0;
		// if (findPoint(g.x, g.y, target)) num++;
		// if (findPoint(g.x + g.width, g.y, target)) num++;
		// if (findPoint(g.x + g.width, g.y + g.height, target)) num++;
		// if (findPoint(g.x, g.y + g.height, target)) num++;

		// if (findPoint(g.x + g.width / 2, g.y + g.height / 2, target)) num++;

		// if (num > 0) {
		// 	print("Overlaping: ", current.caption, current.index_z, target.caption, target.index_z);
		// 	return true;
		// } else {
		// 	return false;
		// }




		var t = target.geometry;
		var g = current.geometry;
		var num = 0;
		// if (t.x < g.x && g.x < t.x + t.width) num++;
		// if (t.y < g.y && g.y < t.y + t.height) num++;
		// if (t.x < g.x + g.width && g.x + g.width < t.x + t.width) num++;
		// if (t.y < g.y + g.height && g.y + g.height < t.y + t.height) num++;

		//////// FIX: Small Overlaping Break Snaping (Screen Change When Split FIX)
		// var sz = 4;
		var sz = snap_size;

		if (g.x < t.x + t.width - sz) num++;
		if (g.y < t.y + t.height - sz) num++;
		if (g.x + g.width > t.x + sz) num++;
		if (g.y + g.height > t.y + sz) num++;

		if (num == 4) {
			// print("Overlaping: ", current.caption, current.index_z, target.caption, target.index_z);
			return true;
		} else {
			return false;
		}
	}

	// Trigger When Mouse Pressed, But DidNot Move Yet (Only Current)
	// Trigger Before Snap
	// var recursiveList;
	//////////////// Save To Old Geometry List FOR After Geometry Change Check & Resize ////////
	// Must Check & Save Before Resize
	var snapsss = {};

	function clientStartMouseMovedResized(client) {
		// print("clientStartMouseMovedResized");
		// print(client);
		// ATTACH(client);


		// recursiveList = workspace.clientList();
		// print("Geometry: ", JSON.stringify(client.geometry));
		// print("Slot Geometry: ", JSON.stringify(client.slot_geometry));
		// print("Float Geometry: ", JSON.stringify(client.float_geometry));

		// if (!client.is_window_group) {
		// 	return;
		// }


		//         DEP: Swap Window
		client.startGeometry = client.geometry;
		// print(client.startGeometry.x, client.startGeometry.y, client.startGeometry.width, client.startGeometry.height);

		// var clients;
		// snaps[client.windowId] = [];
		// if (snaps[client.windowId]) {
		// snaps[client.windowId].length = 0;
		// print(snaps[client.windowId].length);
		// clients = snaps[client.windowId];
		// } else {
		// clients = workspace.clientList();
		// findSnap(client, workspace.clientList());
		// }
		// findSnap(client, workspace.clientList());




		// System Default Style
		// Affect Slot Swap
		// client.sloted = "";
		// print("Sloted: ", client.sloted);




		snapStarted_Keyboard_Mouse(client);




		// if (client.sloted != undefined && client.sloted != "") {
		// 	// if (client.move) {
		// 		var g = {
		// 			x: client.geometry.x,
		// 			y: client.geometry.y,
		// 			width: client.float_geometry.width,
		// 			height: client.float_geometry.height,
		// 		};
		// 		// client.x = g.x;
		// 		// client.y = g.y;
		// 		// client.width = g.width;
		// 		// client.height = g.height;
		// 		client.geometry = g;
		// 		// client.sloted = "";
		// 	// }
		// }




		// SaveGeometry(client);


		// print("swap_sted: ", swap_sted);
	}




	// var clientList = {};
	function calcGridSize(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		client.grid_size_h = client.width / (cp.width / grid_size_h);
		client.grid_size_v = client.height / (cp.height / grid_size_v);
		// client.grid_size_h = Math.round(client.width / (cp.width / grid_size_h));
		// client.grid_size_v = Math.round(client.height / (cp.height / grid_size_v));
	}

	function calcGridPosition(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// FIX: Keyboard Float -> Slot Border Align (Minus Value)
		client.grid_position_h = (client.x - cp.x) / (cp.width / grid_size_h);
		client.grid_position_v = (client.y - cp.y) / (cp.height / grid_size_v);
		// client.grid_position_h = Math.round((client.x - cp.x) / (cp.width / grid_size_h));
		// client.grid_position_v = Math.round((client.y - cp.y) / (cp.height / grid_size_v));
		// print("calc:", client.x, cp.x, cp.width, grid_size_h);
		// print("calc:", client.y, cp.y, cp.height, grid_size_v);

		// if (client.sloted == "YES") {
		// 	client.grid_position_h = (client.slot_geometry.x - cp.x) / (cp.width / grid_size_h);
		// 	client.grid_position_v = (client.slot_geometry.y - cp.y) / (cp.height / grid_size_v);
		// }
		// if (client.sloted == "NO") {
		// 	client.grid_position_h = (client.float_geometry.x - cp.x) / (cp.width / grid_size_h);
		// 	client.grid_position_v = (client.float_geometry.y - cp.y) / (cp.height / grid_size_v);
		// }

		// var obj = {
		// 	grid_size_h: Math.round(client.width / (cp.width / grid_size_h)),
		// 	grid_size_v: Math.round(client.height / (cp.height / grid_size_v)),
		// 	grid_position_h: Math.round(client.x / (cp.width / grid_size_h)),
		// 	grid_position_v: Math.round(client.y / (cp.height / grid_size_v)),
		// };
		// clientList[client.windowId] = obj;

		// print("Grid Size: ", client.grid_size_h, client.grid_size_v);
		// print("Grid Position: ", client.grid_position_h, client.grid_position_v);
	}

	function calcGridPos_L(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// FIX: Keyboard Float -> Slot Border Align (Minus Value)
		// if (client.x - cp.x) {
		client.grid_pos_l = (client.x - cp.x) / (cp.width / grid_size_h);
		// client.grid_pos_l = (client.x) / (cp.width / grid_size_h);
		// } else {
		// client.grid_pos_l = (client.x) / (cp.width / grid_size_h);
		// }
		// print("GL: ", client.grid_pos_l);
	}

	function calcGridPos_R(client) {
		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// FIX: Keyboard Float -> Slot Border Align (Minus Value)
		// if (client.x + client.width - cp.x > 0) {
		client.grid_pos_r = (client.x + client.width - cp.x) / (cp.width / grid_size_h);
		// client.grid_pos_r = (client.x + client.width) / (cp.width / grid_size_h);
		// } else {
		// client.grid_pos_r = (client.x + client.width) / (cp.width / grid_size_h);
		// }
		// print("GR: ", client.grid_pos_r);
	}

	function calcGridPos_T(client) {
		var cp = workspace.clientArea(workspace.ScreenArea, client);

		// FIX: Keyboard Float -> Slot Border Align (Minus Value)
		// if (client.y - cp.y > 0) {
		client.grid_pos_t = (client.y - cp.y) / (cp.height / grid_size_v);
		// client.grid_pos_t = (client.y) / (cp.height / grid_size_v);
		// } else {
		// client.grid_pos_t = (client.y) / (cp.height / grid_size_v);
		// }
		// print("GT: ", client.grid_pos_t);
	}

	function calcGridPos_B(client) {
		var cp = workspace.clientArea(workspace.ScreenArea, client);

		// FIX: Keyboard Float -> Slot Border Align (Minus Value)
		// if (client.y + client.height - cp.y > 0) {
		client.grid_pos_b = (client.y + client.height - cp.y) / (cp.height / grid_size_v);
		// client.grid_pos_b = (client.y + client.height) / (cp.height / grid_size_v);
		// } else {
		// client.grid_pos_b = (client.y + client.height) / (cp.height / grid_size_v);
		// }
		// print("GB: ", client.grid_pos_b);
	}


	// var prev_seconds_setp;
	// Trigger When Snap / Change (Only Current)
	// Trigger After Window Snap
	function clientStepMouseMovedResized(client, rect) {
		// print("clientStepMouseMovedResized");
		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// }


		// if (client.move && has_moved(client) && client.tiled) {
		// 	if (workspace.floatGeometry[client.frameId]) {
		// 		var g = {
		// 			x: client.geometry.x + client.geometry.width / 2 - workspace.floatGeometry[client.frameId].width / 2,
		// 			y: client.geometry.y + client.geometry.height / 2 - workspace.floatGeometry[client.frameId].height / 2,
		// 			width: workspace.floatGeometry[client.frameId].width,
		// 			height: workspace.floatGeometry[client.frameId].height,
		// 		}
		// 		client.geometry = g;
		// 	}
		// 	print("Restored: ", client.x, client.y, client.width, client.height);
		// 	client.tiled = false;
		// }




		// recursiveList = workspace.clientList();


		// print(client);
		// print(rect.x, rect.y, rect.width, rect.height);

		// findSnap(client, workspace.clientList());

		// Danger: Trigger Only Current
		// if (client.resize) {
		// 	clientResized(client, rect);
		// }

		// Danger: Trigger Only Current
		// if (client.move) {
		// 	clientMoved(client, client.geometry);
		// }

		// if (snapsss[client.windowId]) {
		// 	// Initial Skip
		// if (client == workspace.activeClient) {
		// 	// // Danger: Trigger Only Current
		// 	if (client.resize) {
		// 		// 		// if (!client.move) {
		// clientResized(client, client.geometry, snapsss[client.windowId]);
		// 		// 		// }
		// 	}
		// }
		// }




		// FIX Swap Cancel slotTile Size Change
		// if (client.sloted != undefined && client.sloted != "") {
		// 	client.geometry = client.float_geometry;
		// 	client.sloted = "";
		// }

		// if (swap_sted) return;
		// if (!client.float_geometry) return;
		// // if (has_moved(client)) {
		// var cp = workspace.clientArea(workspace.PlacementArea, client);
		// // print(cp.x, cp.y, cp.width, cp.height);
		// // print(client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);
		//////// Detach ////////
		// if (client.sloted != undefined && client.sloted != "") {
		// var slot_x = client.geometry.x + (client.float_geometry.width - client.slot_geometry.width) / 2;
		// var slot_y = client.geometry.y + (client.float_geometry.height - client.slot_geometry.height) / 2;

		// if ((slot_x > cp.x) &&
		// 	(slot_y > cp.y) &&
		// 	(slot_x + client.slot_geometry.width < cp.x + cp.width) &&
		// 	(slot_y + client.slot_geometry.height < cp.y + cp.height)) {

		// FIX: Swap Size Not Change
		// client.sloted = "";

		//////// Save ////////
		// DoNot Change, Will Affect Others
		// client.float_geometry = client.geometry;
		// print("Saved: ", client.float_geometry.x, client.float_geometry.y, client.float_geometry.width, client.float_geometry.height);

		// FIX: activeClient Not Working (workspace.activeClient, workspace.slotWindow) (Size Change When UnSlot)
		// Glitch
		// if (client.move) {
		// 	var g = {
		// 		x: client.geometry.x,
		// 		y: client.geometry.y,
		// 		width: client.float_geometry.width,
		// 		height: client.float_geometry.height,
		// 	};
		// 	client.geometry = g;
		// }
		// print("Restored: ", g.x, g.y, g.width, g.height);
		// print("Detach");
		// } else {
		// 	var g = {
		// 		x: slot_x,
		// 		y: slot_y,
		// 		width: client.slot_geometry.width,
		// 		height: client.slot_geometry.height
		// 	};
		// 	client.geometry = g;
		// 	// print("Slot");
		// }
		// }
		// // }




		// // FIX: workspace.activeClient, workspace.slotWindow
		// if (client.sloted == undefined || client.sloted == "") {
		// 	// if (client.move) {
		// 		var g = {
		// 			x: client.slot_geometry.x,
		// 			y: client.slot_geometry.y,
		// 			width: client.slot_geometry.width,
		// 			height: client.slot_geometry.height,
		// 		};
		// 		// client.x = g.x;
		// 		// client.y = g.y;
		// 		// client.width = g.width;
		// 		// client.height = g.height;
		// 		client.geometry = g;
		// 		client.sloted = "";
		// 	// }
		// }




		// Slow Performance
		// // FIX: workspace.activeClient, workspace.slotWindow
		// if (client.sloted != undefined && client.sloted != "" && !Detached(client)) {
		// 	if (client.move) {
		// 		var g = {
		// 			x: client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2,
		// 			y: client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2,
		// 			width: client.slot_geometry.width,
		// 			height: client.slot_geometry.height
		// 		};
		// 		// client.x = g.x;
		// 		// client.y = g.y;
		// 		// client.width = g.width;
		// 		// client.height = g.height;
		// 		client.geometry = g;
		// 		// client.sloted = "";
		// 		// print(g.x, g.y, g.width, g.height);
		// 	}
		// }

		// // FIX: workspace.activeClient, workspace.slotWindow
		// if (client.sloted != undefined && client.sloted != "" && Detached(client)) {
		// 	if (client.move) {
		// 		var g = {
		// 			x: client.geometry.x,
		// 			y: client.geometry.y,
		// 			width: client.float_geometry.width,
		// 			height: client.float_geometry.height
		// 		};
		// 		// client.x = g.x;
		// 		// client.y = g.y;
		// 		// client.width = g.width;
		// 		// client.height = g.height;
		// 		client.geometry = g;
		// 		// client.sloted = "";
		// 		// print(g.x, g.y, g.width, g.height);
		// 	}
		// }




		// //////// Save ////////
		// if ((client.resize || client.move) && !swap_sted) {
		// 	if (client.sloted != undefined && client.sloted == "NO" && Detached(client)) {
		// 		client.float_geometry = client.geometry;
		// 	}
		// 	if (client.sloted != undefined && client.sloted == "YES" && !Detached(client)) {
		// 		// var g = {
		// 		// 	x: client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2,
		// 		// 	y: client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2,
		// 		// 	width: client.slot_geometry.width,
		// 		// 	height: client.slot_geometry.height
		// 		// };
		// 		// var g = {
		// 		// 	x: client.geometry.x + client.geometry.width / 2 - cp.width / grid_size_h / 2,
		// 		// 	y: client.geometry.y + client.geometry.height / 2 - cp.height / grid_size_v / 2,
		// 		// 	width: cp.width / grid_size_h,
		// 		// 	height: cp.height / grid_size_v
		// 		// };
		// 		// client.slot_geometry = g;
		// 		client.slot_geometry = client.geometry;
		// 	}
		// }




		// FIX: Slow Performance (Reduce Multiple Signal)
		// var date = new Date();
		// // print(date.getTime());
		// if (date.getTime() - prev_seconds_setp < 100) return;
		// prev_seconds_setp = date.getTime();




		//////// BUG ////////
		// print("swap_sted Step: ", swap_sted);
		// if (swap_sted == 0) {
		// print(animation);
		// FIX: Glitch When Resize
		// FIX: Disable Size Change (Attach) When Resize
		// Two Size Change With One Resize Command
		//		if (client.move || client.resize) {
		// if (client.move) {
		if (client.move && !client.resize) {
			// if (!client.resize) {
			if (slot_sw == true) {
				if (slot_animation_fix == true) {
					// ATDETACH_Check(client);
					ATDETACH(client, false);
				}
			}
			// }
		}


		// if (client.resize || client.move) {
		// calcGridSize(client);
		// calcGridPosition(client);

		// 	// FIX: CanNot Size Up Sloted Window
		// 	// SaveGeometry(client);
		// }




		if (client.resize && !client.move) {
			if (grid_snap_sw == true || slot_animation_fix == true) {
				// FIX: undefined Error
				// if (!snapsss[client.windowId]) {
				// FIX: Conflict With Sticky Resize
				// if (snapsss[client.windowId] == "") {

				RESIZESNAP(client, false);
				// }
			}

			client.resized = true;
			client.moved = false;
		}
		if (client.move && !client.resize) {
			if (grid_snap_sw == true || slot_animation_fix == true) {
				MOVESNAP(client, false);
			}

			client.moved = true;
			client.resized = false;
		}

		client.prev_geometry = client.geometry;
		// client.resize_direct = "";




		// if (client.resize || client.move) {
		// FIX: Top Bottom Snap Same Time (95%+ Height) (SnapZone = 0)
		// BorderLimit(client);
		// }
	}

	function SaveGeometry(client) {
		if (client.sloted == "NO") {
			// if (!ATDETACH_Check(client)) {
			// FIX: Resize From Slot Save To Float
			// if (client.sloted == "NO" && !ATDETACH_Check(client)) {
			client.float_geometry = client.geometry;
			// print("SaveGeometry Float: ", client.float_geometry.x, client.float_geometry.y, client.float_geometry.width, client.float_geometry.height);
		}

		// FIX: Keyboard Tiled / Mouse Tiled Detach Size Differrent: client.sloted != ""
		// FIX: Mouse Tile Not Work client.sloted == "YES"
		if (client.sloted == "YES") {
			// if (ATDETACH_Check(client)) {
			// FIX: Resize From Slot Save To Float
			// if (client.sloted == "YES" && ATDETACH_Check(client)) {
			client.slot_geometry = client.geometry;
			// print("SaveGeometry Slot: ", client.slot_geometry.x, client.slot_geometry.y, client.slot_geometry.width, client.slot_geometry.height);
		}
		// }
	}

	// function ATTACH(client) {
	// 	// print(client.sloted);
	// 	var cp = workspace.clientArea(workspace.PlacementArea, client);

	// 	if ((client.resize || client.move) && !swap_sted) {
	// 		//////// FIX: Size Restore Set A New Value To client.geometry When Finish ////////
	// 		// FIX: workspace.activeClient, workspace.slotWindow
	// 		if (client.sloted != undefined && client.sloted == "NO" && Detached(client)) {
	// 			// if (client.move) {
	// 			// var g = {
	// 			// 	x: client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2,
	// 			// 	y: client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2,
	// 			// 	width: client.slot_geometry.width,
	// 			// 	height: client.slot_geometry.height
	// 			// };

	// 			var g = {
	// 				x: client.geometry.x + client.geometry.width / 2 - cp.width / grid_size_h / 2,
	// 				y: client.geometry.y + client.geometry.height / 2 - cp.height / grid_size_v / 2,
	// 				width: cp.width / grid_size_h,
	// 				height: cp.height / grid_size_v
	// 			};
	// 			// client.x = g.x;
	// 			// client.y = g.y;
	// 			// client.width = g.width;
	// 			// client.height = g.height;
	// 			client.geometry = g;
	// 			client.slot_geometry = g;
	// 			// client.sloted = "";
	// 			print(g.x, g.y, g.width, g.height);
	// 			// }
	// 			// client.sloted = "YES";
	// 		}

	// 		// Slow Performance
	// 		//////// FIX: Size Restore Set A New Value To client.geometry When Finish ////////
	// 		// FIX: workspace.activeClient, workspace.slotWindow
	// 		if (client.sloted != undefined && client.sloted == "YES" && !Detached(client)) {
	// 			// if (client.move) {
	// 			var g = {
	// 				x: client.geometry.x,
	// 				y: client.geometry.y,
	// 				width: client.float_geometry.width,
	// 				height: client.float_geometry.height
	// 			};
	// 			// client.x = g.x;
	// 			// client.y = g.y;
	// 			// client.width = g.width;
	// 			// client.height = g.height;
	// 			client.geometry = g;
	// 			// client.sloted = "";
	// 			// print(g.x, g.y, g.width, g.height);
	// 			// }
	// 			// client.sloted = "NO";
	// 		}
	// 	}
	// }

	// Trigger When Change (Current & Snapped)
	// Trigger After Window Snap / UnSnap
	// Danger: System Stop Response (clientMoved clientResized .geometry Recursive)
	// Move Window To Snap, And Quickly Move Other, Stop Response
	// Reproduce: Move To Corner (ll || rr) && (tb || bt) Snap, Then Fast Resize Other
	var prev_seconds;

	function has_resized(client) {
		if ((client.geometry.width != client.startGeometry.width) &&
			(client.geometry.height != client.startGeometry.height)) {
			return true;
		} else {
			return false;
		}
	}

	var prev_delay;
	// Trigger When Mouse Release
	function clientFinishMouseMovedResized(client) {
		// // Window Border Snap Screen Edge FIX
		// var cp = workspace.clientArea(workspace.PlacementArea, client);

		// var slot_x = client.geometry.x;
		// var slot_y = client.geometry.y;
		// if (slot_x < cp.x) slot_x = cp.x;
		// if (slot_y < cp.y) slot_y = cp.y;
		// if (slot_x + client.geometry.width > cp.x + cp.width) slot_x = cp.x + cp.width - client.geometry.width;
		// if (slot_y + client.geometry.height > cp.y + cp.height) slot_y = cp.y + cp.height - client.geometry.height;

		// var g = {
		// 	x: slot_x,
		// 	y: slot_y,
		// 	width: client.geometry.width,
		// 	height: client.geometry.height,
		// };

		// client.geometry = g;




		// print("clientFinishMouseMovedResized");

		// FIX: ATDETACH Not Working With 2 X 2 Layout
		// FIX: Mouse Edge Snap Not Correct
		// Quick Tile & Edge Snap
		// Mouse Edge Snap & Keyboard Send
		// DoNot move to Half Recursive Call Frozen
		// var cm = workspace.clientArea(workspace.MaximizeArea, client);
		// print(cm.x, cm.y, cm.width, cm.height);

		var cp = workspace.clientArea(workspace.PlacementArea, client);
		// print("Area: ", cp.x, cp.y, cp.width, cp.height);
		// print("Client: ", client.x, client.y, client.width, client.height);
		// print("Floating");

		// Conflict With Move ResizeSnap When Specific Size
		// workspace.slotWindowQuickTile First Then MOVETO FIX: Mouse Slot Restored Size Differrent With Keyboard
		if (client.x == cp.x && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileTopLeft();
				// MOVETO(client, "TL");
			}
			return;
		} else {}
		if (client.x == cp.width / 2 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileTopRight();
				// MOVETO(client, "TR");
			}
			return;
		} else {}
		if (client.x == cp.width / 2 && client.y == cp.height / 2 + cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileBottomRight();
				// MOVETO(client, "BR");
			}
			return;
		} else {}
		if (client.x == cp.x && client.y == cp.height / 2 + cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileBottomLeft();
				// MOVETO(client, "BL");
			}
			return;
		} else {}


		if (client.x == cp.x && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileLeft();
				// MOVETO(client, "L");
			}
			return;
		} else {}
		if (client.x == cp.width / 2 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileRight();
				// MOVETO(client, "R");
			}
			return;
		} else {}


		if (client.x == cp.x && client.y == cp.y && client.width == cp.width && client.height == cp.height / 2) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileTop();
				// MOVETO(client, "T");
			}
			return;
		} else {}
		if (client.x == cp.x && client.y == cp.height / 2 + cp.y && client.width == cp.width && client.height == cp.height / 2) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowQuickTileBottom();
				// MOVETO(client, "B");
			}
			return;
		} else {}
		if (client.x == cp.x && client.y == cp.y && client.width == cp.width && client.height == cp.height) {
			if (grid_snap_sw == true) {
				// workspace.slotWindowMaximize();
				// MOVETO(client, "C");
			}
			return;
		} else {}
		// if (client.x == cp.width / 4 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
		// }




		// SaveGeometry(client);

		// print("swap_sted: ", swap_sted);
		// print("split_sted: ", split_sted);

		// print(client);
		// findSnap(client, workspace.clientList());

		// FIX: client.geometry undefined
		// Danger: Trigger Only Current
		// if (client.resize) {
		// clientResized(client, rect);
		// }

		// if (client.move) {
		// 	clientMoved(client, client.geometry);
		// }

		// snaps[client.windowId] = [];
		// if (snaps[client.windowId]) {
		// snaps[client.windowId].length = 0;
		// }

		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// findSnap(client, workspace.clientList());

		// clientStartMouseMovedResized(client);

		// clientResized(client, rect);




		// // Quick Tile Enhancements
		// if (client.moved && client.tiled) {
		// 	if (workspace.floatGeometry[client.frameId]) {
		// 		var g = {
		// 			x: client.geometry.x + client.geometry.width / 2 - workspace.floatGeometry[client.frameId].width / 2,
		// 			y: client.geometry.y + client.geometry.height / 2 - workspace.floatGeometry[client.frameId].height / 2,
		// 			width: workspace.floatGeometry[client.frameId].width,
		// 			height: workspace.floatGeometry[client.frameId].height,
		// 		}
		// 		client.geometry = g;
		// 	}
		// 	print("Restored: ", client.x, client.y, client.width, client.height);
		// 	client.tiled = false;
		// }


		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	// if (workspace.floatGeometry[client.frameId]) {
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// 	// }
		// }




		// print(swap_sted);
		if (swap_sted == true) {
			// FIX: Sticky Resize
			var wcl = workspace.clientList();
			for (var i = 0; i < wcl.length; ++i) {
				var ti = wcl[i].windowId;
				// FIX: undefined Error
				snapsss[ti] = null;
				// snapsss[ti].length = 0;
				// snapsss[ti] = [];
			}




			// var client = client;
			var target = findSwap(client);
			print(target, target.caption, target.windowId);


			// if(target == false || target == undefined || target == null) return;
			if (target != undefined && target != false) {

				var cp = workspace.clientArea(workspace.PlacementArea, client);

				var tsl = target.sloted;
				var csl = client.sloted;


				client.desktop = target.desktop;
				target.desktop = client.startDesktop;


				// print("Sloted: ", client.sloted, client.caption);
				// print("Sloted: ", target.sloted, target.caption);


				// print(JSON.stringify(client));




				// KWin Script Bug Wait For Update
				// // Test
				// workspace.activeClient = client;
				// workspace.slotWindowMaximize();

				// workspace.activeClient = target;
				// workspace.slotWindowMaximize();

				// return;




				// // workspace.activeClient = target;
				// print(workspace.activeClient);
				// if (target.sloted == "TL") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileTopLeft();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileTopLeft();
				// }
				// if (target.sloted == "TR") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileTopRight();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileTopRight();
				// }
				// if (target.sloted == "BR") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileBottomRight();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileBottomRight();
				// }
				// if (target.sloted == "BL") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileBottomLeft();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileBottomLeft();
				// }

				// if (target.sloted == "L") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileLeft();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileLeft();
				// }
				// if (target.sloted == "R") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileRight();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileRight();
				// }

				// if (target.sloted == "T") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileTop();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileTop();
				// }
				// if (target.sloted == "B") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowQuickTileBottom();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowQuickTileBottom();
				// }
				// if (target.sloted == "C") {
				// 	workspace.activeClient = client;
				// 	workspace.slotWindowMaximize();

				// 	// workspace.activeClient = target;
				// 	// workspace.slotWindowMaximize();
				// }


				// // workspace.activeClient = client;
				// print(workspace.activeClient);
				// if (client.sloted == "TL") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileTopLeft();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileTopLeft();
				// }
				// if (client.sloted == "TR") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileTopRight();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileTopRight();
				// }
				// if (client.sloted == "BR") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileBottomRight();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileBottomRight();
				// }
				// if (client.sloted == "BL") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileBottomLeft();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileBottomLeft();
				// }

				// if (client.sloted == "L") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileLeft();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileLeft();
				// }
				// if (client.sloted == "R") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileRight();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileRight();
				// }

				// if (client.sloted == "T") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileTop();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileTop();
				// }
				// if (client.sloted == "B") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowQuickTileBottom();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowQuickTileBottom();
				// }
				// if (client.sloted == "C") {
				// 	workspace.activeClient = target;
				// 	workspace.slotWindowMaximize();

				// 	// workspace.activeClient = client;
				// 	// workspace.slotWindowMaximize();
				// }




				// var g = {
				// 	x: target.geometry.x,
				// 	y: target.geometry.y,
				// 	width: target.geometry.width + 1,
				// 	height: target.geometry.height + 1,
				// }
				// target.geometry = g;
				// g = {
				// 	x: target.geometry.x,
				// 	y: target.geometry.y,
				// 	width: target.geometry.width - 1,
				// 	height: target.geometry.height - 1,
				// }
				// target.geometry = g;

				// target.clientStartMouseMovedResized(target);
				// target.clientFinishMouseMovedResized(target);


				// target.geometry = cGeo;
				// client.geometry = tGeo;
				// target.float_geometry = cfltg;
				// client.float_geometry = tfltg;




				//////// Float Float Swap: Keep Slot Size, Swap Float Size And Position ////////
				//////// Float Slot Swap: Float Window Slot Size & Position To Slot Window, Slot Window Float Size & Position To Float Window ////////
				//////// Slot Slot Swap: Keep Float Size, Swap Slot Size And Position ////////

				//////// Only Swap Position, Restore To Float / Slot Size If Not Float / Sloted After Swap, Manual Change Position & Resize After Swap ////////


				// Save Old Value For Swap
				var tgo = target.geometry;
				var cgo = client.geometry;
				// var tsgo = target.slot_geometry;
				// var csgo = client.slot_geometry;
				// var tfgo = target.float_geometry;
				// var cfgo = client.float_geometry;

				var cg;
				// if (target.sloted == "YES") {
				// print("Target: ", tsgo.x, tsgo.y, tsgo.width, tsgo.height);

				// var slot_x = tgo.x + tgo.width / 2 - tsgo.width / 2;
				// var slot_y = tgo.y + tgo.height / 2 - tsgo.height / 2;

				// Center
				var slot_x = tgo.x + tgo.width / 2;
				var slot_y = tgo.y + tgo.height / 2;
				// Top Left
				// var slot_x = tgo.x;
				// var slot_y = tgo.y;

				// if (slot_x < cp.x) slot_x = cp.x;
				// if (slot_y < cp.y) slot_y = cp.y;
				// if (slot_x + tsgo.width > cp.x + cp.width) slot_x = cp.x + cp.width - tsgo.width;
				// if (slot_y + tsgo.height > cp.y + cp.height) slot_y = cp.y + cp.height - tsgo.height;

				// cg = {
				// 	x: slot_x,
				// 	y: slot_y,
				// 	width: tsgo.width,
				// 	height: tsgo.height
				// };

				// if (client.sloted == "YES") {
				// 	cg = {
				// 		x: slot_x - csgo.width / 2,
				// 		y: slot_y - csgo.height / 2,
				// 		width: csgo.width,
				// 		height: csgo.height
				// 	};
				// } else {
				// 	cg = {
				// 		x: slot_x - cfgo.width / 2,
				// 		y: slot_y - cfgo.height / 2,
				// 		width: cfgo.width,
				// 		height: cfgo.height
				// 	};
				// }

				// Center
				cg = {
					x: slot_x - cgo.width / 2,
					y: slot_y - cgo.height / 2,
					width: cgo.width,
					height: cgo.height
				};
				// Top Left
				// cg = {
				// 	x: slot_x,
				// 	y: slot_y,
				// 	width: cgo.width,
				// 	height: cgo.height
				// };

				// print("Client: ", cg.x, cg.y, cg.width, cg.height);
				client.geometry = cg;

				// client.geometry = tsgo;
				// }
				// if (target.sloted == "NO") {
				// 	// var float_x = tgo.x + tgo.width / 2 - cfgo.width / 2;
				// 	// var float_y = tgo.y + tgo.height / 2 - cfgo.height / 2;

				// 	var float_x = tgo.x + tgo.width / 2;
				// 	var float_y = tgo.y + tgo.height / 2;

				// 	// cg = {
				// 	// 	x: float_x,
				// 	// 	y: float_y,
				// 	// 	width: tfgo.width,
				// 	// 	height: tfgo.height
				// 	// };

				// 	if (client.sloted == "YES") {
				// 		cg = {
				// 			x: float_x - csgo.width / 2,
				// 			y: float_y - csgo.height / 2,
				// 			width: csgo.width,
				// 			height: csgo.height
				// 		};
				// 	} else {
				// 		cg = {
				// 			x: float_x - cfgo.width / 2,
				// 			y: float_y - cfgo.height / 2,
				// 			width: cfgo.width,
				// 			height: cfgo.height
				// 		};
				// 	}

				// 	// print(cg.x, cg.y, cg.width, cg.height);
				// 	client.geometry = cg;

				// 	// client.geometry = tfgo;
				// }


				var tg;
				// if (client.sloted == "YES") {
				// print("Client: ", csgo.x, csgo.y, csgo.width, csgo.height);

				// var slot_x = client.startGeometry.x + client.startGeometry.width / 2 - csgo.width / 2;
				// var slot_y = client.startGeometry.y + client.startGeometry.height / 2 - csgo.height / 2;

				// Center
				var slot_x = client.startGeometry.x + cgo.width / 2;
				var slot_y = client.startGeometry.y + cgo.height / 2;
				// Top Left
				// var slot_x = client.startGeometry.x;
				// var slot_y = client.startGeometry.y;

				// if (slot_x < cp.x) slot_x = cp.x;
				// if (slot_y < cp.y) slot_y = cp.y;
				// if (slot_x + csgo.width > cp.x + cp.width) slot_x = cp.x + cp.width - csgo.width;
				// if (slot_y + csgo.height > cp.y + cp.height) slot_y = cp.y + cp.height - csgo.height;

				// tg = {
				// 	x: slot_x,
				// 	y: slot_y,
				// 	width: csgo.width,
				// 	height: csgo.height
				// };

				// if (target.sloted == "YES") {
				// 	tg = {
				// 		x: slot_x - tsgo.width / 2,
				// 		y: slot_y - tsgo.height / 2,
				// 		width: tsgo.width,
				// 		height: tsgo.height
				// 	};
				// } else {
				// 	tg = {
				// 		x: slot_x - tfgo.width / 2,
				// 		y: slot_y - tfgo.height / 2,
				// 		width: tfgo.width,
				// 		height: tfgo.height
				// 	};
				// }

				// Center
				tg = {
					x: slot_x - tgo.width / 2,
					y: slot_y - tgo.height / 2,
					width: tgo.width,
					height: tgo.height
				};
				// Top Left
				// tg = {
				// 	x: slot_x,
				// 	y: slot_y,
				// 	width: tgo.width,
				// 	height: tgo.height
				// };

				// print("Target: ", tg.x, tg.y, tg.width, tg.height);
				target.geometry = tg;
				// target.geometry = csgo;
				// }
				// if (client.sloted == "NO") {
				// 	// var float_x = client.startGeometry.x + client.startGeometry.width / 2 - tfgo.width / 2;
				// 	// var float_y = client.startGeometry.y + client.startGeometry.height / 2 - tfgo.height / 2;

				// 	var float_x = client.startGeometry.x + cgo.width / 2;
				// 	var float_y = client.startGeometry.y + cgo.height / 2;

				// 	// tg = {
				// 	// 	x: float_x,
				// 	// 	y: float_y,
				// 	// 	width: cfgo.width,
				// 	// 	height: cfgo.height
				// 	// };

				// 	if (target.sloted == "YES") {
				// 		tg = {
				// 			x: float_x - tsgo.width / 2,
				// 			y: float_y - tsgo.height / 2,
				// 			width: tsgo.width,
				// 			height: tsgo.height
				// 		};
				// 	} else {
				// 		tg = {
				// 			x: float_x - tfgo.width / 2,
				// 			y: float_y - tfgo.height / 2,
				// 			width: tfgo.width,
				// 			height: tfgo.height
				// 		};
				// 	}

				// 	// print(tg.x, tg.y, tg.width, tg.height);
				// 	target.geometry = tg;

				// 	// target.geometry = cfgo;
				// }


				// if (target.sloted == "YES") {
				// 	// print("Client Slot: ", cg.x, cg.y, cg.width, cg.height);
				// 	csgo = cg;
				// }
				// if (client.sloted == "YES") {
				// 	// print("Target Slot: ", tg.x, tg.y, tg.width, tg.height);
				// 	tsgo = tg;
				// }




				// if (target.sloted == "YES") {
				// 	var tgx_b;
				// 	var tgy_b;
				// 	if (target.geometry.x < cp.x) tgx_b = cp.x;
				// 	if (target.geometry.y < cp.y) tgy_b = cp.y;
				// 	if (target.geometry.x + target.geometry.width > cp.x + cp.width) tgx_b = cp.x + cp.width - target.geometry.width;
				// 	if (target.geometry.y + target.geometry.height > cp.y + cp.height) tgy_b = cp.y + cp.height - target.geometry.height;
				// 	var tg_b = {
				// 		x: tgx_b,
				// 		y: tgy_b,
				// 		width: target.geometry.width,
				// 		height: target.geometry.height,
				// 	};
				// 	target.geometry = tg_b;
				// }

				// if (client.sloted == "YES") {
				// 	var cgx_b;
				// 	var cgy_b;
				// 	if (client.geometry.x < cp.x) cgx_b = cp.x;
				// 	if (client.geometry.y < cp.y) cgy_b = cp.y;
				// 	if (client.geometry.x + client.geometry.width > cp.x + cp.width) cgx_b = cp.x + cp.width - client.geometry.width;
				// 	if (client.geometry.y + client.geometry.height > cp.y + cp.height) cgy_b = cp.y + cp.height - client.geometry.height;
				// 	var cg_b = {
				// 		x: cgx_b,
				// 		y: cgy_b,
				// 		width: client.geometry.width,
				// 		height: client.geometry.height,
				// 	};
				// 	client.geometry = cg_b;
				// }

				// SaveGeometry(target);
				// SaveGeometry(client);




				//////// Save ////////
				// DoNot Move Line
				// client.sloted = tsl;
				// target.sloted = csl;
				// print("Sloted: ", client, client.sloted);
				// print("Sloted: ", target, target.sloted);




				// workspace.slotSwitchWindowRight();
				// workspace.slotWindowLower();


				// Focus Working, But Value DidNot Change
				// workspace.activeClient = target;
				// print(workspace.activeClient);
				// var wcl = workspace.clientList();
				// for (var i = 0; i < wcl.length; ++i) {
				// 	if(wcl[i].active){
				// 		print(wcl[i]);
				// 	}
				// }


				// var date = new Date();
				// var sw = true;
				// while (sw) {
				// 	if (date.getTime() - prev_delay < 5000) {

				// 	} else {
				// 		print(workspace.activeClient);

				// 		sw = false;
				// 	}
				// 	prev_delay = date.getTime();
				// }


				// workspace.slotWindowResize();
				// workspace.slotWindowResize();



				calcGridSize(client);
				// calcGridPosition(client);
				calcGridPos_L(client);
				calcGridPos_R(client);
				calcGridPos_T(client);
				calcGridPos_B(client);

				calcGridSize(target);
				// calcGridPosition(target);
				calcGridPos_L(target);
				calcGridPos_R(target);
				calcGridPos_T(target);
				calcGridPos_B(target);
			}

			if (slot_sw == true) {
				// Auto Restore To Float If Space Left
				ATDETACH(target, true);
				ATDETACH(client, true);
			}

			// SaveGeometry(target);
			// SaveGeometry(client);

			swap_sted = false;
			// print("swap_sted Finish: ", swap_sted);
		}




		// if (client.sloted != undefined && client.sloted != "" && Detached(client)) {
		// client.float_geometry = client.geometry;
		// client.sloted = "";
		// client.sloted = "NO";
		// }

		// if (client.sloted == undefined || client.sloted == "" && !Detached(client)) {
		// client.sloted = "YES";
		// }




		// if (client.sloted != undefined && client.sloted != "" && !Detached(client)) {
		// client.geometry = client.slot_geometry;
		// client.slot_geometry = client.geometry;
		// client.sloted = "";
		// }




		// if (client.sloted == undefined || client.sloted == "") {
		// if(client.float_geometry) {
		// client.geometry = client.float_geometry;
		// 		print("Restored: ", client.float_geometry.x, client.float_geometry.y, client.float_geometry.width, client.float_geometry.height);
		// 	}
		// }

		//////// Save ////////
		// DoNot Change, Will Affect Others
		// FIX: activeClient Not Working (workspace.activeClient, workspace.slotWindow) (Size Change When UnSlot)
		// if (client.sloted == undefined || client.sloted == "" && Detached(client)) {
		// client.float_geometry = client.geometry;
		// print("Saved: ", client, client.float_geometry.x, client.float_geometry.y, client.float_geometry.width, client.float_geometry.height);
		// }

		// // FIX: activeClient Not Working (workspace.activeClient, workspace.slotWindow) (Size Change When UnSlot)
		// if (client.sloted != undefined && client.sloted != "") {
		// 	client.sloted = "";
		// 	var g = {
		// 		x: client.geometry.x,
		// 		y: client.geometry.y,
		// 		width: client.float_geometry.width,
		// 		height: client.float_geometry.height
		// 	}
		// 	client.geometry = g;
		// }


		//////// Save ////////
		// if ((client.resize || client.move) && !swap_sted) {
		// 	if (client.sloted == undefined || client.sloted == "" && Detached(client)) {
		// 		client.float_geometry = client.geometry;
		// 	}
		// 	if (client.sloted != undefined && client.sloted != "" && !Detached(client)) {
		// 		client.slot_geometry = client.geometry;
		// 	}
		// }




		if (split_sted == true) {
			// FIX: Sticky Resize
			var wcl = workspace.clientList();
			for (var i = 0; i < wcl.length; ++i) {
				var ti = wcl[i].windowId;
				// FIX: undefined Error
				snapsss[ti] = null;
				// snapsss[ti].length = 0;
				// snapsss[ti] = [];
			}

			split_sted = false;
		}




		if (swap_sted == false && split_sted == false) {
			// print(JSON.stringify(client.geometry));
			// print(client.geometry);
			// SaveGeometry(client);

			// print(snapsss[client.windowId]);

			// FIX: Disable Size Change (Attach) When Resize
			// FIX: Size Change After Move Finish
			// if (!client.move && !client.resize) {
			// if (!client.resize) {
			// FIX: Move And Resize Floated Window To Small Slot Area And Keep Floated
			// FIX: Resize Sloted Window Bigger Than Itis Float Size, Then Window Restore To Itis Float
			if (client.moved && !client.resized) {
				if (slot_sw == true) {
					// ATDETACH_Check(client);
					ATDETACH(client, true);
					// print("ATDETACH");
				}
			}




			// if (client.resized || client.moved) {
			// FIX: Top Bottom Snap Same Time (95%+ Height) (SnapZone = 0)
			// BorderLimit(client);
			// }
		}




		if (client.resized && !client.moved) {
			if (grid_snap_sw == true) {
				// FIX: Stick Resize & Grid Resize Conflict
				// FIX: undefined Error
				// if (!snapsss[client.windowId]) {
				// FIX: Conflict With Sticky Resize
				// if (snapsss[client.windowId] == "") {

				// FIX: Window Size Change After Finish
				RESIZESNAP(client, true);
				// }
			}

			client.resized = true;
			client.moved = false;
		}
		if (client.moved && !client.resized) {
			if (grid_snap_sw == true) {
				// FIX: Window Size Change After Finish
				MOVESNAP(client, true);
			}

			client.moved = true;
			client.resized = false;
		}

		client.prev_geometry = client.geometry;
		// client.resize_direct = "";




		SaveGeometry(client);
		// print("SaveGeometry");


		Clear_Snap();
	}

	// Quick Tile Restore Hack
	// function Detached(client) {
	// 	if ((client.geometry.x > client.startGeometry.x ||
	// 			client.geometry.x < client.startGeometry.x) ||
	// 		(client.geometry.y > client.startGeometry.y ||
	// 			client.geometry.y < client.startGeometry.y)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	var atdetached = false;

	function ATDETACH_Check(client) {
		// print("ATDETACH_Check");

		var cp = workspace.clientArea(workspace.PlacementArea, client);

		// print(client.geometry.x + client.geometry.width / 2 - cp.width / grid_size_h / 2);
		// print(client.geometry.x + client.geometry.width / 2 - cp.width / grid_size_h / 2 + cp.width / grid_size_h);
		// print(client.geometry.y + client.geometry.height / 2 - cp.height / grid_size_v / 2);
		// print(client.geometry.y + client.geometry.height / 2 - cp.height / grid_size_v / 2 + cp.height / grid_size_v);

		// FIX: CanNot Size Up Slot
		// FIX: Too Sensive
		// var sz = options.windowSnapZone;
		var sz = snap_size;
		// var sz = 0;
		// FIX: Slot Size == Float Size With Math.round Math.floor, MOVETO Left Right Not Same
		// var sz = 4;
		if ((client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2 < cp.x + sz ||
				client.geometry.x + client.geometry.width / 2 - client.slot_geometry.width / 2 + client.slot_geometry.width > cp.x + cp.width - sz) ||
			(client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2 < cp.y + sz ||
				client.geometry.y + client.geometry.height / 2 - client.slot_geometry.height / 2 + client.slot_geometry.height > cp.y + cp.height - sz)) {
			// print("Attached");

			// FIX: Not Auto Expand After Swap
			// client.sloted = "YES";
			atdetached = true;
			return true;
		} else {
			// print("Detached");

			// FIX: Not Auto Expand After Swap
			// client.sloted = "NO";
			atdetached = false;
			return false;
		}
	}

	//////// Geometry Is Current ////////

	// Mouse
	function ATDETACH(client, finish) {
		// print("ATDETACH");
		// print(JSON.stringify(client.float_geometry));
		// print(JSON.stringify(client.slot_geometry));

		// print("Detached: ", Detached(client));
		// print("Sloted: ", client.sloted);
		// Set Slot When Finish FIX: Confilict With Mouse Move Resize
		// if (finish) {
		// 	// FIX: Not Auto Expand After Swap
		// 	if (!ATDETACH_Check(client)) {
		// 		client.sloted = "YES";
		// 	} else {
		// 		client.sloted = "NO";
		// 	}
		// }


		// FIX Swap It Self: TypeError: cannot call clientArea(): argument 2 has unknown type `const KWin::AbstractClient*' (register the type with qScriptRegisterMetaType())
		if (!client) return;
		var cp = workspace.clientArea(workspace.PlacementArea, client);


		//////// FIX: Size Restore Set A New Value To client.geometry When Finish ////////
		// FIX: workspace.activeClient, workspace.slotWindow
		// if (client.sloted == "YES") {
		// Only Apply Geometry Once
		if (client.sloted == "NO" && ATDETACH_Check(client)) {
			// print("NO | Attached");
			// if (ATDETACH_Check(client)) {
			// Slot Size Limit For Float Window Tile To Border
			var csgw = client.slot_geometry.width;
			var csgh = client.slot_geometry.height;
			var cfgw = client.float_geometry.width;
			var cfgh = client.float_geometry.height;
			if (csgw > cfgw) csgw = cfgw;
			if (csgh > cfgh) csgh = cfgh;
			// var sz = options.windowSnapZone;
			// if (csgw > cfgw - sz) csgw = cfgw - sz;
			// if (csgh > cfgh - sz) csgh = cfgh - sz;

			// FIX: Not Auto Expand After Swap
			// if (!Detached(client)) {
			// if (client.sloted == "YES") {
			// var slot_x = client.geometry.x + cfgw / 2 - csgw / 2;
			// var slot_y = client.geometry.y + cfgh / 2 - csgh / 2;
			// }else if(client.sloted != "NO") {
			// }

			// When Attach
			var slot_x = client.geometry.x + cfgw / 2 - csgw / 2;
			var slot_y = client.geometry.y + cfgh / 2 - csgh / 2;
			// if (slot_x < cp.x) slot_x = cp.x;
			// if (slot_y < cp.y) slot_y = cp.y;
			// if (slot_x + csgw > cp.x + cp.width) slot_x = cp.x + cp.width - csgw;
			// if (slot_y + csgh > cp.y + cp.height) slot_y = cp.y + cp.height - csgh;

			// client.float_geometry = client.geometry;
			var g = {
				x: slot_x,
				y: slot_y,
				width: csgw,
				height: csgh
			};
			// client.x = g.x;
			// client.y = g.y;
			// client.width = g.width;
			// client.height = g.height;
			//// FIX: Glitch Performance
			// if (client.geometry != g) {
			// print(JSON.stringify(g));
			client.geometry = g;
			// }
			// FIX: Slot Resize Horizontal Large, Float Resize Horizontal Small, Slot Check Has Gap
			client.slot_geometry = g;
			print("Slot:", g.x, g.y, g.width, g.height);
			// client.sloted = "YES";

			if (finish) {
				client.sloted = "YES";

				if (switch_desktop_fix == true) {
					// FIX: Size Change After Move Window To Desktop
					workspace.slotWindowMove();
				}
			}

			// Prevent Fall In To Next Condition
			// return;
		}
		if (client.sloted == "YES" && ATDETACH_Check(client)) {
			// client.geometry = client.slot_geometry;
			// print("YES | Attached");
		}


		//////// FIX: Size Restore Set A New Value To client.geometry When Finish ////////
		// FIX: workspace.activeClient, workspace.slotWindow
		// if (client.sloted == "NO") {
		// Only Apply Geometry Once
		if (client.sloted == "YES" && !ATDETACH_Check(client)) {
			// print("YES | Detached");
			// if (!ATDETACH_Check(client)) {
			// FIX: Not Auto Expand After Swap
			// if (Detached(client)) {
			// var float_x;
			// var float_y;
			// if (client.sloted == "NO") {
			// 	float_x = client.geometry.x;
			// 	float_y = client.geometry.y;
			// } else {
			// 	float_x = client.geometry.x - (client.float_geometry.width / 2 - client.slot_geometry.width / 2);
			// 	float_y = client.geometry.y - (client.float_geometry.height / 2 - client.slot_geometry.height / 2);
			// }


			// Slot Size Limit For Float Window Tile To Border
			var csgw = client.slot_geometry.width;
			var csgh = client.slot_geometry.height;
			var cfgw = client.float_geometry.width;
			var cfgh = client.float_geometry.height;
			if (cfgw < csgw) cfgw = csgw;
			if (cfgh < csgh) cfgh = csgh;
			// var sz = options.windowSnapZone;
			// if (cfgw < csgw + sz) cfgw = csgw + sz;
			// if (cfgh < csgh + sz) cfgh = csgh + sz;

			// FIX: Position Change (Slot Move To Desktop Drag To UnSlot)
			// var float_x = client.geometry.x;
			// var float_y = client.geometry.y;

			// When Detach
			var float_x = client.geometry.x + csgw / 2 - cfgw / 2;
			var float_y = client.geometry.y + csgh / 2 - cfgh / 2;
			// if (float_x < cp.x) float_x = cp.x;
			// if (float_y < cp.y) float_y = cp.y;
			// if (float_x + cfgw > cp.x + cp.width) float_x = cp.x + cp.width - cfgw;
			// if (float_y + cfgh > cp.y + cp.height) float_y = cp.y + cp.height - cfgh;

			// client.slot_geometry = client.geometry;
			var g = {
				x: float_x,
				y: float_y,
				width: cfgw,
				height: cfgh
			};
			// client.x = g.x;
			// client.y = g.y;
			// client.width = g.width;
			// client.height = g.height;
			//// FIX: Glitch Performance
			// if (client.geometry != g) {
			// print(JSON.stringify(g));
			client.geometry = g;
			// }
			// FIX: Slot Resize Horizontal Large, Float Resize Horizontal Small, Slot Check Has Gap
			client.float_geometry = g;
			print("Float:", g.x, g.y, g.width, g.height);
			// client.sloted = "NO";

			if (finish) {
				client.sloted = "NO";

				if (switch_desktop_fix == true) {
					// FIX: Size Change After Move Window To Desktop
					workspace.slotWindowMove();
				}
			}

			// Prevent Fall In To Next Condition
			// return;
		}
		if (client.sloted == "NO" && !ATDETACH_Check(client)) {
			// print("NO | Detached");
			// client.geometry = client.float_geometry;
		}




		// SaveGeometry(client);
	}

	function findPoint(pointX, pointY, client) {
		// print(pointX, pointY);

		if ((pointX > client.x && pointY > client.y) &&
			(pointX < client.x + client.width && pointY > client.y) &&
			(pointX < client.x + client.width && pointY < client.y + client.height) &&
			(pointX > client.x && pointY < client.y + client.height)) {
			// print("Center Inside: ", client);
			return true;
		} else {
			return false;
		}
	}

	function findSwap(client) {
		var wcl = workspace.clientList();
		var ctX = client.x + client.width / 2;
		var ctY = client.y + client.height / 2;

		// var tlX = client.x;
		// var tlY = client.y;
		// var trX = client.x + client.width;
		// var trY = client.y;
		// var brX = client.x + client.width;
		// var brY = client.y + client.height;
		// var blX = client.x;
		// var blY = client.y + client.height;

		var found;

		// var tArr = wcl.filter(function (item) {
		// 	if ((item.windowId != client.windowId) && findPoint(ctX, ctY, item)) {
		// 		print("Center: ", item);
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}
		// });

		var tArr = [];
		for (var i = 0; i < wcl.length; ++i) {
			// FIX: Crash (Swap With Desktop)
			if (wcl[i].specialWindow) continue;
			if (wcl[i].fullScreen) continue;

			if ((client.windowId != wcl[i].windowId) && findPoint(ctX, ctY, wcl[i])) {
				// print("Center: ", wcl[i]);
				tArr.push(wcl[i]);
			}
		}

		// 		print(tArr.length);

		if (tArr.length == 0) {
			return false;
		} else if (tArr.length == 1) {
			found = tArr[0];
		} else if (tArr.length > 1) {
			// var pCount = 0;
			// var cCount = 0;
			var pIndex = 0;
			for (var i = 0; i < tArr.length; ++i) {
				// if (findPoint(tlX, tlY, tArr[i])) {
				// 	cCount++;
				// }
				// if (findPoint(trX, trY, tArr[i])) {
				// 	cCount++;
				// }
				// if (findPoint(brX, brY, tArr[i])) {
				// 	cCount++;
				// }
				// if (findPoint(blX, blY, tArr[i])) {
				// 	cCount++;
				// }

				// print(cCount);
				// if (cCount != 0 && cCount >= pCount) {
				// 	found = tArr[i];
				// }

				// pCount = cCount;
				// cCount = 0;

				// print(tArr[i]);
				// 				print(tArr[i].index_z);
				// Skip Not Focused Window System Start
				if (tArr[i].index_z != undefined) {
					if (tArr[i].index_z > pIndex) {
						found = tArr[i];
					}
					pIndex = tArr[i].index_z;
				}
			}
		}
		// 		print("Found: ", found);

		// FIX: Crash (Swap With Desktop)
		// 		if (found == undefined) return false;
		// 		if (found.geometry == undefined) return false;
		// 		if (found.startGeometry == undefined) return false;

		return found;
	}

	// function geoLimit(client) {
	// 	var cp = workspace.clientArea(workspace.PlacementArea, client);

	// 	if (ATDETACH_Check(client)) {
	// 	// if (client.sloted == "YES") {
	// 		var csgw = client.slot_geometry.width;
	// 		var csgh = client.slot_geometry.height;
	// 		var cfgw = client.float_geometry.width;
	// 		var cfgh = client.float_geometry.height;

	// 		var slot_x = client.geometry.x + cfgw / 2 - csgw / 2;
	// 		var slot_y = client.geometry.y + cfgh / 2 - csgh / 2;

	// 		if (slot_x < cp.x) slot_x = cp.x;
	// 		if (slot_y < cp.y) slot_y = cp.y;
	// 		if (slot_x + csgw > cp.x + cp.width) slot_x = cp.x + cp.width - csgw;
	// 		if (slot_y + csgh > cp.y + cp.height) slot_y = cp.y + cp.height - csgh;
	// 	}

	// 	if (!ATDETACH_Check(client)) {
	// 	// if (client.sloted == "NO") {
	// 		var csgw = client.slot_geometry.width;
	// 		var csgh = client.slot_geometry.height;
	// 		var cfgw = client.float_geometry.width;
	// 		var cfgh = client.float_geometry.height;

	// 		var float_x = client.geometry.x + csgw / 2 - cfgw / 2;
	// 		var float_y = client.geometry.y + csgh / 2 - cfgh / 2;

	// 		if (float_x < cp.x) float_x = cp.x;
	// 		if (float_y < cp.y) float_y = cp.y;
	// 		if (float_x + cfgw > cp.x + cp.width) float_x = cp.x + cp.width - cfgw;
	// 		if (float_y + cfgh > cp.y + cp.height) float_y = cp.y + cp.height - cfgh;
	// 	}
	// }




	function ffMove(client) {
		var g = {
			x: client.tx,
			y: client.ty,
			width: client.tw,
			height: client.th,
		};
		client.geometry = g;
	}

	// Vertical 4, Horizontail 3, Move = Aero Snap Conflict
	// Horizontail 6, Vertical 2, Move = Aero Snap Conflict
	function MOVESNAP(client, finish) {
		// FIX: Position Change When Attaching
		// Slot Snap Not Work
		// if (atdetached == true) return;

		var cp = workspace.clientArea(workspace.PlacementArea, client);
		var sz = snap_size;
		// FIX: Snap Broke When Fast Resize
		// var sz = snap_size / 2;
		// var sw = false;




		if (finish == false) {
			// client.tx = false;
			// client.ty = false;
			// client.tw = false;
			// client.th = false;

			// client.tx = client.x;
			// client.ty = client.y;
			// client.tw = client.width;
			// client.th = client.height;

			client.tx = client.geometry.x;
			client.ty = client.geometry.y;
			client.tw = client.geometry.width;
			client.th = client.geometry.height;


			// != Check FIX: Canot Snap Left Right Same Time (95%+ Height) (SnapZone = 0)
			// Only Snap Mouse Moving Direction
			for (var i = 0; i < grid_size_h; i++) {
				var gl = cp.width / grid_size_h * i + cp.x;
				// FIX: Canot Snap Right Desktop Border
				var gr = cp.width / grid_size_h * (i + 1) + cp.x;

				// && client.x != gl
				if (client.x < gl + sz && client.x > gl - sz && (MoveDirect(client) == "L" || MoveDirect(client) == "TL" || MoveDirect(client) == "BL")) {
					client.tx = gl;

					ffMove(client);
				}

				// && client.x + client.width != gr
				if (client.x + client.width < gr + sz && client.x + client.width > gr - sz && (MoveDirect(client) == "R" || MoveDirect(client) == "TR" || MoveDirect(client) == "BR")) {
					client.tx = gr - client.width;

					ffMove(client);
				}
			}

			// != Check FIX: Canot Snap Top Bottom Same Time (95%+ Height) (SnapZone = 0)
			// Only Snap Mouse Moving Direction
			for (var j = 0; j < grid_size_v; j++) {
				var gt = cp.height / grid_size_v * j + cp.y;
				// FIX: Canot Snap Bottom Desktop Border
				var gb = cp.height / grid_size_v * (j + 1) + cp.y;

				// && client.y != gt
				if (client.y < gt + sz && client.y > gt - sz && (MoveDirect(client) == "T" || MoveDirect(client) == "TL" || MoveDirect(client) == "TR")) {
					client.ty = gt;

					ffMove(client);
				}

				// && client.y + client.height != gb
				if (client.y + client.height < gb + sz && client.y + client.height > gb - sz && (MoveDirect(client) == "B" || MoveDirect(client) == "BL" || MoveDirect(client) == "BR")) {
					client.ty = gb - client.height;

					ffMove(client);
				}
			}
		}




		// Prevent Screen Change When Split
		// FIX: Size Change After Release Right Button (Same As Step Size)
		if (finish == true) {
			// FIX: Glitch
			var g = {
				x: client.tx,
				y: client.ty,
				// width: client.tw - 1,
				// height: client.th - 1,
				width: client.tw,
				height: client.th,
			};
			client.geometry = g;
			// if (!shallowEquals(client.geometry, g)) client.geometry = g;

			// client.prev_geometry = g;
			// client.resize_direct = "";
		}
	}




	// function ffResize_(client) {
	// 	// FIX: App Crash
	// 	// if (client.tx == false) {
	// 	// 	client.tx = client.geometry.x;
	// 	// }
	// 	// if (client.ty == false) {
	// 	// 	client.ty = client.geometry.y;
	// 	// }
	// 	// if (client.tw == false) {
	// 	// 	client.tw = client.geometry.width;
	// 	// }
	// 	// if (client.th == false) {
	// 	// 	client.th = client.geometry.height;
	// 	// }

	// 	// FIX: Size Change
	// 	var g = {
	// 		x: client.tx,
	// 		y: client.ty,
	// 		// -1 FIX: Grid Snap Freeze (Continuously Draging Window Border Near Grid)
	// 		width: client.tw - 1,
	// 		height: client.th - 1,
	// 		// width: client.tw,
	// 		// height: client.th,
	// 	};
	// 	client.geometry = g;
	// 	// if (!shallowEquals(client.geometry, g)) client.geometry = g;
	// 	// workspace.slotWindowResize();
	// }

	// function RESIZESNAP_(client, finish) {
	// 	// FIX: Stick Resize Broke
	// 	// var wcl = workspace.clientList();
	// 	// if (findSnap(client, wcl).length > 0) return;


	// 	var cp = workspace.clientArea(workspace.PlacementArea, client);
	// 	var sz = snap_size;
	// 	// FIX: Snap Broke When Fast Resize
	// 	// var sz = snap_size / 2;
	// 	// var sw = false;

	// 	if (finish == false) {
	// 		// client.tx = false;
	// 		// client.ty = false;
	// 		// client.tw = false;
	// 		// client.th = false;

	// 		// client.tx = client.x;
	// 		// client.ty = client.y;
	// 		// client.tw = client.width;
	// 		// client.th = client.height;

	// 		client.tx = client.geometry.x;
	// 		client.ty = client.geometry.y;
	// 		client.tw = client.geometry.width;
	// 		client.th = client.geometry.height;

	// 		// FIX: Snap Not Working client.geometry
	// 		for (var i = 0; i < grid_size_h; i++) {
	// 			var gl = cp.width / grid_size_h * i + cp.x;
	// 			var gr = cp.width / grid_size_h * (i + 1) + cp.x;

	// 			if (client.geometry.x > gl - sz && client.geometry.x < gl + sz && client.geometry.x != gl) {
	// 				client.tx = gl;

	// 				// if (client.geometry.x < gl) {
	// 				// 	client.tw = client.geometry.width - sz;
	// 				// }
	// 				// if (client.geometry.x > gl) {
	// 				// 	client.tw = client.geometry.width + sz;
	// 				// }
	// 			}

	// 			if (client.geometry.x + client.geometry.width > gr - sz && client.geometry.x + client.geometry.width < gr + sz && client.geometry.x + client.geometry.width != gr) {
	// 				client.tw = gr - client.geometry.x;
	// 			}
	// 		}

	// 		for (var j = 0; j < grid_size_v; j++) {
	// 			var gt = cp.height / grid_size_v * j + cp.y;
	// 			var gb = cp.height / grid_size_v * (j + 1) + cp.y;

	// 			if (client.geometry.y > gt - sz && client.geometry.y < gt + sz && client.geometry.y != gt) {
	// 				client.ty = gt;

	// 				// if (client.geometry.y < gt) {
	// 				// 	client.th = client.geometry.height - sz;
	// 				// }
	// 				// if (client.geometry.y > gt) {
	// 				// 	client.th = client.geometry.height + sz;
	// 				// }
	// 			}

	// 			if (client.geometry.y + client.geometry.height > gb - sz && client.geometry.y + client.geometry.height < gb + sz && client.geometry.y + client.geometry.height != gb) {
	// 				client.th = gb - client.geometry.y;
	// 			}
	// 		}

	// 		ffResize_(client);
	// 	}

	// 	// Prevent Screen Change When Split
	// 	// FIX: Size Change After Release Right Button (Same As Step Size)
	// 	if (finish == true) {
	// 		// FIX: Glitch
	// 		var g = {
	// 			x: client.tx,
	// 			y: client.ty,
	// 			// width: client.tw - 1,
	// 			// height: client.th - 1,
	// 			width: client.tw,
	// 			height: client.th,
	// 		};
	// 		client.geometry = g;
	// 		// if (!shallowEquals(client.geometry, g)) client.geometry = g;
	// 	}


	// 	// // if (sw) {
	// 	// if (finish == false) {
	// 	// 	// var g = {
	// 	// 	// 	x: tx,
	// 	// 	// 	y: ty,
	// 	// 	// 	width: tw,
	// 	// 	// 	height: th,
	// 	// 	// };
	// 	// 	// client.geometry = g;
	// 	// 	// print(client.caption, JSON.stringify(client.geometry));

	// 	// 	// if (client.geometry != g) {
	// 	// 	// 	client.geometry = g;
	// 	// 	// }

	// 	// 	// FIX: Glitch
	// 	// 	var g = {
	// 	// 		x: tx,
	// 	// 		y: ty,
	// 	// 		width: tw - 1,
	// 	// 		height: th - 1,
	// 	// 	};
	// 	// 	client.geometry = g;
	// 	// }

	// 	// if (finish == true) {
	// 	// 	// FIX: Glitch
	// 	// 	// FIX: Snap
	// 	// 	var g = {
	// 	// 		x: tx,
	// 	// 		y: ty,
	// 	// 		width: tw,
	// 	// 		height: th,
	// 	// 	};
	// 	// 	client.geometry = g;
	// 	// }
	// }




	function ffResize(client) {
		// Prevent Screen Change When Split
		// FIX: Size Change After Release Right Button (Same As Step Size)
		// FIX: Glitch
		var g = {
			x: client.tx,
			y: client.ty,
			// -1 FIX: Grid Snap Freeze (Continuously Draging Window Border Near Grid)
			width: client.tw - 1,
			height: client.th - 1,
			// width: client.tw,
			// height: client.th,
		};
		client.geometry = g;
		// client.x = g.x;
		// client.y = g.y;
		// client.width = g.width;
		// client.height = g.height;
		// if (!shallowEquals(client.geometry, g)) client.geometry = g;

		// client.prev_geometry = g;
		// client.resize_direct = "";
	}

	function RESIZESNAP(client, finish) {
		// FIX: Stick Resize Broke
		// var wcl = workspace.clientList();
		// if (findSnap(client, wcl).length > 0) return;


		var cp = workspace.clientArea(workspace.PlacementArea, client);
		var sz = snap_size;
		// FIX: Snap Broke When Fast Resize
		// var sz = snap_size / 2;
		// var sw = false;




		if (finish == false) {
			// client.tx = false;
			// client.ty = false;
			// client.tw = false;
			// client.th = false;

			// client.tx = client.x;
			// client.ty = client.y;
			// client.tw = client.width;
			// client.th = client.height;

			client.tx = client.geometry.x;
			client.ty = client.geometry.y;
			client.tw = client.geometry.width;
			client.th = client.geometry.height;

			// client.geometry FIX: Snap Not Working
			if (ResizeDirect(client) == "TL") {
				for (var j = 0; j < grid_size_v; j++) {
					var gt = cp.height / grid_size_v * j + cp.y;
					var gb = cp.height / grid_size_v * (j + 1) + cp.y;

					if (client.geometry.y > gt - sz && client.geometry.y < gt + sz && client.geometry.y != gt) {
						client.ty = gt;
					}
				}

				for (var i = 0; i < grid_size_h; i++) {
					var gl = cp.width / grid_size_h * i + cp.x;
					var gr = cp.width / grid_size_h * (i + 1) + cp.x;

					if (client.geometry.x > gl - sz && client.geometry.x < gl + sz && client.geometry.x != gl) {
						client.tx = gl;
					}
				}

				ffResize(client);
			}
			if (ResizeDirect(client) == "TR") {
				for (var j = 0; j < grid_size_v; j++) {
					var gt = cp.height / grid_size_v * j + cp.y;
					var gb = cp.height / grid_size_v * (j + 1) + cp.y;

					if (client.geometry.y > gt - sz && client.geometry.y < gt + sz && client.geometry.y != gt) {
						client.ty = gt;
					}
				}

				for (var i = 0; i < grid_size_h; i++) {
					var gl = cp.width / grid_size_h * i + cp.x;
					var gr = cp.width / grid_size_h * (i + 1) + cp.x;

					if (client.geometry.x + client.geometry.width > gr - sz && client.geometry.x + client.geometry.width < gr + sz && client.geometry.x + client.geometry.width != gr) {
						client.tw = gr - client.x;
					}
				}

				ffResize(client);
			}
			if (ResizeDirect(client) == "BL") {
				for (var j = 0; j < grid_size_v; j++) {
					var gt = cp.height / grid_size_v * j + cp.y;
					var gb = cp.height / grid_size_v * (j + 1) + cp.y;

					if (client.geometry.y + client.geometry.height > gb - sz && client.geometry.y + client.geometry.height < gb + sz && client.geometry.y + client.geometry.height != gb) {
						client.th = gb - client.y;
					}
				}

				for (var i = 0; i < grid_size_h; i++) {
					var gl = cp.width / grid_size_h * i + cp.x;
					var gr = cp.width / grid_size_h * (i + 1) + cp.x;

					if (client.geometry.x > gl - sz && client.geometry.x < gl + sz && client.geometry.x != gl) {
						client.tx = gl;
					}
				}

				ffResize(client);
			}
			if (ResizeDirect(client) == "BR") {
				for (var j = 0; j < grid_size_v; j++) {
					var gt = cp.height / grid_size_v * j + cp.y;
					var gb = cp.height / grid_size_v * (j + 1) + cp.y;

					if (client.geometry.y + client.geometry.height > gb - sz && client.geometry.y + client.geometry.height < gb + sz && client.geometry.y + client.geometry.height != gb) {
						client.th = gb - client.y;
					}
				}

				for (var i = 0; i < grid_size_h; i++) {
					var gl = cp.width / grid_size_h * i + cp.x;
					var gr = cp.width / grid_size_h * (i + 1) + cp.x;

					if (client.geometry.x + client.geometry.width > gr - sz && client.geometry.x + client.geometry.width < gr + sz && client.geometry.x + client.geometry.width != gr) {
						client.tw = gr - client.x;
					}
				}

				ffResize(client);
			}

			if (ResizeDirect(client) == "L") {
				for (var i = 0; i < grid_size_h; i++) {
					var gl = cp.width / grid_size_h * i + cp.x;
					var gr = cp.width / grid_size_h * (i + 1) + cp.x;

					if (client.geometry.x > gl - sz && client.geometry.x < gl + sz && client.geometry.x != gl) {
						client.tx = gl;

						// if (client.geometry.x < gl) {
						// 	client.tw = client.geometry.width - 1;
						// }
						// if (client.geometry.x > gl) {
						// 	client.tw = client.geometry.width + 1;
						// }
					}
				}

				ffResize(client);
			}
			if (ResizeDirect(client) == "R") {
				for (var i = 0; i < grid_size_h; i++) {
					var gl = cp.width / grid_size_h * i + cp.x;
					var gr = cp.width / grid_size_h * (i + 1) + cp.x;

					if (client.geometry.x + client.geometry.width > gr - sz && client.geometry.x + client.geometry.width < gr + sz && client.geometry.x + client.geometry.width != gr) {
						client.tw = gr - client.x;
					}
				}

				ffResize(client);
			}
			if (ResizeDirect(client) == "T") {
				for (var j = 0; j < grid_size_v; j++) {
					var gt = cp.height / grid_size_v * j + cp.y;
					var gb = cp.height / grid_size_v * (j + 1) + cp.y;

					if (client.geometry.y > gt - sz && client.geometry.y < gt + sz && client.geometry.y != gt) {
						client.ty = gt;

						// if (client.geometry.y < gt) {
						// 	client.th = client.geometry.height - 1;
						// }
						// if (client.geometry.y > gt) {
						// 	client.th = client.geometry.height + 1;
						// }
					}
				}

				ffResize(client);
			}
			if (ResizeDirect(client) == "B") {
				for (var j = 0; j < grid_size_v; j++) {
					var gt = cp.height / grid_size_v * j + cp.y;
					var gb = cp.height / grid_size_v * (j + 1) + cp.y;

					if (client.geometry.y + client.geometry.height > gb - sz && client.geometry.y + client.geometry.height < gb + sz && client.geometry.y + client.geometry.height != gb) {
						client.th = gb - client.y;
					}
				}

				ffResize(client);
			}
		}

		// Prevent Screen Change When Split
		// FIX: Size Change After Release Right Button (Same As Step Size)
		if (finish == true) {
			// FIX: Glitch
			var g = {
				x: client.tx,
				y: client.ty,
				// width: client.tw - 1,
				// height: client.th - 1,
				width: client.tw,
				height: client.th,
			};
			client.geometry = g;
			// if (!shallowEquals(client.geometry, g)) client.geometry = g;

			// client.prev_geometry = g;
			// client.resize_direct = "";
		}
	}

	function MoveDirect(client) {
		if (client.move && !client.resize) {
			if (client.geometry.y < client.prev_geometry.y && client.geometry.x < client.prev_geometry.x) {
				// client.move_direct = "L";
				print("Moving: ", "TL");
				return "TL";
			} else
			if (client.geometry.y < client.prev_geometry.y && client.geometry.x > client.prev_geometry.x) {
				// client.move_direct = "R";
				print("Moving: ", "TR");
				return "TR";
			} else
			if (client.geometry.y > client.prev_geometry.y && client.geometry.x < client.prev_geometry.x) {
				// client.move_direct = "T";
				print("Moving: ", "BL");
				return "BL";
			} else
			if (client.geometry.y > client.prev_geometry.y && client.geometry.x > client.prev_geometry.x) {
				// client.move_direct = "B";
				print("Moving: ", "BR");
				return "BR";
			} else
			if (client.geometry.x < client.prev_geometry.x) {
				// client.move_direct = "L";
				print("Moving: ", "L");
				return "L";
			} else
			if (client.geometry.x > client.prev_geometry.x) {
				// client.move_direct = "R";
				print("Moving: ", "R");
				return "R";
			} else
			if (client.geometry.y < client.prev_geometry.y) {
				// client.move_direct = "T";
				print("Moving: ", "T");
				return "T";
			} else
			if (client.geometry.y > client.prev_geometry.y) {
				// client.move_direct = "B";
				print("Moving: ", "B");
				return "B";
			} else {
				print("Moving: ", "C");
				return "C";
			}

			// print("Moving: ", client.move_direct);
		}
	}

	function ResizeDirect(client) {
		if (client.resize && !client.move) {
			if (client.prev_geometry.y != client.geometry.y && client.prev_geometry.x != client.geometry.x) {
				// client.resize_direct = "TL";
				print("Resizing: ", "TL");
				return "TL";
			} else
			if (client.prev_geometry.y != client.geometry.y && client.prev_geometry.x + client.prev_geometry.width != client.geometry.x + client.geometry.width) {
				// client.resize_direct = "TR";
				print("Resizing: ", "TR");
				return "TR";
			} else
			if (client.prev_geometry.y + client.prev_geometry.height != client.geometry.y + client.geometry.height && client.prev_geometry.x != client.geometry.x) {
				// client.resize_direct = "BL";
				print("Resizing: ", "BL");
				return "BL";
			} else
			if (client.prev_geometry.y + client.prev_geometry.height != client.geometry.y + client.geometry.height && client.prev_geometry.x + client.prev_geometry.width != client.geometry.x + client.geometry.width) {
				// client.resize_direct = "BR";
				print("Resizing: ", "BR");
				return "BR";
			} else
			if (client.prev_geometry.x != client.geometry.x) {
				// client.resize_direct = "L";
				print("Resizing: ", "L");
				return "L";
			} else
			if (client.prev_geometry.x + client.prev_geometry.width != client.geometry.x + client.geometry.width) {
				// client.resize_direct = "R";
				print("Resizing: ", "R");
				return "R";
			} else
			if (client.prev_geometry.y != client.geometry.y) {
				// client.resize_direct = "T";
				print("Resizing: ", "T");
				return "T";
			} else
			if (client.prev_geometry.y + client.prev_geometry.height != client.geometry.y + client.geometry.height) {
				// client.resize_direct = "B";
				print("Resizing: ", "B");
				return "B";
			} else {
				print("Resizing: ", "C");
				return "C";
			}

			// print("Resizing: ", client.resize_direct);
		}
	}

	function bufferGeometryChanged(client, rect) {
		// print("Buffer: ", client, client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);
	}

	function clientGeometryChanged(client, rect) {
		// print("Client: ", client, client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);
	}

	function frameGeometryChanged(client, rect) {
		// print("Frame: ", client, client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);

		client.frame_geometry = client.geometry;
	}

	function geometryShapeChanged(client, rect) {
		// print("Shape: ", client, client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);

		// ResizeDirect(client);
		// MoveDirect(client);
		// client.prev_geometry = client.geometry;
		// client.resize_direct = "";

		// if (client.geometry != client.prev_geometry) {}

		// if (client.geometry == client.frame_geometry) {}




		// print(client);
		// print(client.resize);
		// print(client.move);
		// print(client.windowId);
		// print(rect.x, rect.y, rect.width, rect.height);

		// if (!client.is_window_group) {
		// 	return;
		// }


		// print(client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);




		// if (client.move) {
		// 	client.moved = true;
		// }
		// if (client.resize) {
		// 	client.moved = false;
		// }

		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// }




		// Skip Keyboard
		if (!snapsss) return;
		if (!snapsss[client.windowId]) return;
		// if (snapsss.length == 0) return;
		// if (snapsss[client.windowId]) {

		// Find After Change Add Snap Zone To findSnap Check, But Itis Attract Mode
		// Skip Initial
		// if (client != workspace.activeClient) {
		// var snapsss = findSnap(client, workspace.clientList());

		// Danger: Trigger Only Current
		// if (client.resize) {
		// print(client.is_tile);
		if (!client.move) {
			if (tiling_sw == true) {
				// if (rect != client.geometry) {
				// print(snapsss[client.windowId][0]);
				clientResized(client, client.geometry, snapsss[client.windowId]);
				// }
			}
		}
		// }
		// }

		// if (client != workspace.activeClient) {
		// 	var snapsss[client.windowId] = findSnap(client, workspace.clientList());

		// // Danger: Trigger Only Current
		// // if (client.resize) {
		// if (!client.move) {
		// 	clientResized(client, client.geometry, snapsss[client.windowId]);
		// }
		// // }
		// }
		// }

		// Danger: Trigger Only Current
		// if (!client.resize) {
		// 	clientMoved(client, client.geometry);
		// }




		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// FIX: Recursive Resize
		// Must Check & Save Before Resize
		// FIX: Slow Performance
		// FIX: Glitch Resizing Cause Multiple Signal Emit
		// var wcl = workspace.clientList();
		// for (var i = 0; i < wcl.length; ++i) {
		// 	var ti = wcl[i].windowId;
		// 	snapsss[ti] = findSnap(wcl[i], wcl);
		// }




		// FIX: Slow Performance (Reduce Multiple Signal)
		// var date = new Date();
		// // print(date.getTime());
		// if (date.getTime() - prev_seconds < 50) return;
		// prev_seconds = date.getTime();




		// FIX: System Stop Response
		// snaps[client.windowId] = [];
		// if (snaps[client.windowId]) {
		// 	snaps[client.windowId].length = 0;
		// }

		// findSnap(client, workspace.clientList());



		// //////// Save ////////
		// if (client.resize || client.move) {
		// 	if (client.sloted == "NO" && Detached(client)) {
		// 		client.float_geometry = client.geometry;
		// 	}
		// 	if (client.sloted != "YES" && !Detached(client)) {
		// 		client.slot_geometry = client.geometry;
		// 	}
		// }


		// ATDETACH(client, true);
		// SaveGeometry(client);


		// geoLimit(client);




		// if (client.resize || client.move) {
		// 	// FIX: Sloted Position
		// calcGridSize(client);
		// calcGridPosition(client);
		// }
	}

	function clientResized(client, rect, snapsss) {
		// print("clientResized");

		// Too Late
		// findSnap(client, workspace.clientList());
		// print(snaps[client.windowId]);
		// print(snapsss.length);

		// if (!recursiveList) return;

		// if (!client.resize) return;
		if (!snapsss) return;
		// if (!snapsss[client.windowId]) return;
		// if (snapsss.length == 0) return;




		for (var i = 0; i < snapsss.length; ++i) {
			// print(snapsss[i].client.caption, snapsss[i].client.is_tile);
			// FIX Crash Some Times
			if (!snapsss[i]) continue;
			if (!snapsss[i].client) continue;
			if (!snapsss[i].client.is_tile) continue;
			if (snapsss[i].client.is_tile == false) continue;

			// print(JSON.stringify(snapsss[i]));
			// print(snapsss[i].client.test);

			// print(snapsss[i].snap_sw);
			// print(snapsss[i].client.snap_sw);
			// if (!snapsss[i].snap_sw) continue;
			// if (!snapsss[i].client.snap_sw) continue;

			// if (!snapsss[i].client.is_window_group) {
			// 	continue;
			// }
			// print(snapsss[i].client);
			// if (!snapsss[i].is_tile) continue;

			// Find Before Resize
			// print("findSnap");
			// print(snapsss[i], snapsss[i].client, snapsss[i].client.geometry);
			// findSnap(snapsss[i].client, workspace.clientList());
			// findSnap(snapsss[i].client, snaps[client.windowId]);


			var to = {
				x: snapsss[i].client.geometry.x,
				y: snapsss[i].client.geometry.y,
				width: snapsss[i].client.geometry.width,
				height: snapsss[i].client.geometry.height
			};
			// print(snapsss[i].client.geometry.x, snapsss[i].client.geometry.y, snapsss[i].client.geometry.width, snapsss[i].client.geometry.height);


			// print(snapsss[i].lr);
			// print(snapsss[i].rl);
			// print(snapsss[i].tb);
			// print(snapsss[i].bt);

			// print(snapsss[i].ll);
			// print(snapsss[i].rr);
			// print(snapsss[i].tt);
			// print(snapsss[i].bb);

			if (snapsss[i].lr) moveRto(to, rect.x);
			if (snapsss[i].rl) moveLto(to, rect.x + rect.width);
			if (snapsss[i].tb) moveBto(to, rect.y);
			if (snapsss[i].bt) moveTto(to, rect.y + rect.height);

			if (snapsss[i].ll) moveLto(to, rect.x);
			if (snapsss[i].rr) moveRto(to, rect.x + rect.width);
			if (snapsss[i].tt) moveTto(to, rect.y);
			if (snapsss[i].bb) moveBto(to, rect.y + rect.height);

			setGeometry(snapsss[i].client, to, snapsss[i].lr || snapsss[i].rr, snapsss[i].tb || snapsss[i].bb);


			// Not Work
			// var sz = options.windowSnapZone;
			// if (snap.lr) {
			// 	to.width = rect.x - to.x + sz;
			// 	print("LR");
			// }
			// if (snap.rl) {
			// 	to.width = (to.width + to.x) - (rect.x + rect.width);
			// 	to.x = rect.x + rect.width - sz;
			// 	print("RL");
			// }
			// if (snap.tb) {
			// 	to.height = rect.y - to.y + sz;
			// 	print("TB");
			// }
			// if (snap.bt) {
			// 	to.height = (to.height + to.y) - (rect.y + rect.height);
			// 	to.y = rect.y + rect.height - sz;
			// 	print("BT");
			// }

			// if (snap.ll) {
			// 	to.width = to.width + to.x - rect.x;
			// 	to.x = rect.x - sz;
			// 	print("LL");
			// }
			// if (snap.rr) {
			// 	to.width = rect.x + rect.width - to.x + sz;
			// 	print("RR");
			// }
			// if (snap.tt) {
			// 	to.height = to.height + to.y - rect.y;
			// 	to.y = rect.y - sz;
			// 	print("TT");
			// }
			// if (snap.bb) {
			// 	to.height = rect.y + rect.height - to.y + sz;
			// 	print("BB");
			// }
			// setGeometry(snapsss[i].client, to, snapsss[i].lr || snapsss[i].rr, snapsss[i].tb || snapsss[i].bb);


			// print(snapsss[i].client.geometry.x, snapsss[i].client.geometry.y, snapsss[i].client.geometry.width, snapsss[i].client.geometry.height);
			// snapsss[i].client.geometry = to;


			// Recursive
			// print("clientResized");
			// clientResized(snapsss[i].client, snapsss[i].client.geometry);


			// FIX: System Stop Response
			// snapsss[i].client.resize = false;
			// snaps[client.windowId].pop(client);
			// snaps[client.windowId].pop(snapsss[i].client);
		}

		// FIX: System Stop Response
		// snaps[client.windowId] = [];
		// snaps[client.windowId].length = 0;
		// recursiveList.pop(client);
	}




	function moveLto(rect, x) {
		rect.width += rect.x - x;
		rect.x = x;
	}

	function moveRto(rect, x) {
		rect.width = x - rect.x;
	}

	function moveTto(rect, y) {
		rect.height += rect.y - y;
		rect.y = y;
	}

	function moveBto(rect, y) {
		rect.height = y - rect.y;
	}




	function setGeometry(client, geometry, pinRightInsteadLeft, pinBottomInsteadTop) {
		// print(client);
		// print(geometry.x, geometry.y, geometry.width, geometry.height);

		// FIX: cannot access member minSize of deleted QObject
		if (!client.minSize) return;
		if (!client.geometry) return;

		var minSize = {
			w: Math.max(client.minSize.w, Math.min(50, client.geometry.width)),
			h: Math.max(client.minSize.h, Math.min(50, client.geometry.height))
		};

		function applySizeConstraints() {
			var old = geometry.width;
			if (geometry.width < minSize.w) geometry.width = minSize.w;
			if (geometry.width > client.maxSize.w) geometry.width = client.maxSize.w;
			if (pinRightInsteadLeft) geometry.x = geometry.x + old - geometry.width;

			old = geometry.height;
			if (geometry.height < minSize.h) geometry.height = minSize.h;
			if (geometry.height > client.maxSize.h) geometry.height = client.maxSize.h;
			if (pinBottomInsteadTop) geometry.y = geometry.y + old - geometry.height;
		}




		applySizeConstraints();




		// Same As Default (Keep Pack Compatibility)
		var cp = workspace.clientArea(workspace.PlacementArea, client);
		if (geometry.x < cp.x) {
			moveLto(geometry, cp.x);
			pinRightInsteadLeft = false;
		}
		if (geometry.y < cp.y) {
			moveTto(geometry, cp.y);
			pinBottomInsteadTop = false;
		}
		if (geometry.x + geometry.width > cp.x + cp.width) {
			moveRto(geometry, cp.x + cp.width);
			pinRightInsteadLeft = true;
		}
		if (geometry.y + geometry.height > cp.y + cp.height) {
			moveBto(geometry, cp.y + cp.height);
			pinBottomInsteadTop = true;
		}




		// Not Work
		// var max = workspace.clientArea(workspace.MaximizeArea, client);
		// if (geometry.x < max.x) {
		// 	geometry.width = geometry.width + geometry.x - max.x;
		// 	geometry.x = max.x;
		// 	pinRightInsteadLeft = false;
		// }
		// if (geometry.y < max.y) {
		// 	geometry.height = geometry.height + geometry.y - max.y;
		// 	geometry.y = max.y;
		// 	pinBottomInsteadTop = false;
		// }
		// if (geometry.x + geometry.width > max.x + max.width) {
		// 	geometry.width = max.x + max.width - geometry.x;
		// 	pinRightInsteadLeft = true;
		// }
		// if (geometry.y + geometry.height > max.y + max.height) {
		// 	geometry.height = max.y + max.height - geometry.y;
		// 	pinBottomInsteadTop = true;
		// }




		applySizeConstraints();




		if (!shallowEquals(client.geometry, geometry)) client.geometry = geometry;
	}

	function shallowEquals(x, y) {
		if (Object.keys(x).length !== Object.keys(y).length) {
			return false;
		}
		for (var p in x) {
			if (x[p] !== y[p]) {
				return false;
			}
		}
		return true;
	}




	// function clientMoved(client, rect) {
	// 	// client.startGeometry = client.geometry;
	// 	// print("CS: ", client.startGeometry.x, client.startGeometry.y);

	// 	// print(client);
	// 	// if (!client.move) return;
	// 	// Find First
	// 	var snapsss = findSnap(client, workspace.clientList());
	// 	if (!snapsss) return;
	// 	for (var i = 0; i < snapsss.length; ++i) {

	// 		// if (!snapsss[i].client.is_window_group) {
	// 		// 	continue;
	// 		// }
	// 		// print(snapsss[i].client);

	// 		var to = {
	// 			x: snapsss[i].client.geometry.x,
	// 			y: snapsss[i].client.geometry.y,
	// 			width: snapsss[i].client.geometry.width,
	// 			height: snapsss[i].client.geometry.height
	// 		};

	// 		// var dirx = 0;
	// 		// var diry = 0;
	// 		// print(client.prev_rect);
	// 		// if (client.prev_rect) {
	// 		// 	dirx = rect.x - client.prev_rect.x;
	// 		// 	diry = rect.y - client.prev_rect.y;
	// 		// 	print(dirx, diry);
	// 		// }

	// 		// to.x = snapsss[i].client.geometry.x + dirx;
	// 		// to.y = snapsss[i].client.geometry.y + diry;

	// 		// print("SN: ",to.x, to.y);

	// 		if (snapsss[i].lr) {
	// 			to.x = rect.x - to.width;
	// 			to.y = rect.y + (to.y - client.startGeometry.y);
	// 			// print("LR: ", to.x, to.y);
	// 		}
	// 		if (snapsss[i].rl) {
	// 			to.x = rect.x + rect.width;
	// 			to.y = rect.y + (to.y - client.startGeometry.y);
	// 			// print("RL: ", to.x, to.y);
	// 		}
	// 		if (snapsss[i].tb) {
	// 			to.x = rect.x + (to.x - client.startGeometry.x);
	// 			to.y = rect.y - to.height;
	// 			// print("TB: ", to.x, to.y);
	// 		}
	// 		if (snapsss[i].bt) {
	// 			to.x = rect.x + (to.x - client.startGeometry.x);
	// 			to.y = rect.y + rect.height;
	// 			// print("BT: ", to.x, to.y);
	// 		}

	// 		if (snapsss[i].ll) {
	// 			to.x = rect.x;
	// 			to.y = rect.y + (to.y - client.startGeometry.y);
	// 			// print("LL: ", to.x, to.y);
	// 		}
	// 		if (snapsss[i].rr) {
	// 			to.x = rect.x;
	// 			to.y = rect.y + (to.y - client.startGeometry.y);
	// 			// print("RR: ", to.x, to.y);
	// 		}
	// 		if (snapsss[i].tt) {
	// 			to.x = rect.x + (to.x - client.startGeometry.x);
	// 			to.y = rect.y;
	// 			// print("TT: ", to.x, to.y);
	// 		}
	// 		if (snapsss[i].bb) {
	// 			to.x = rect.x + (to.x - client.startGeometry.x);
	// 			to.y = rect.y;
	// 			// print("BB: ", to.x, to.y);
	// 		}

	// 		snapsss[i].client.geometry = to;

	// 		// if (!snap.lr && !snap.ll && !snap.rl && !snap.rr && !snap.tb && !snap.tt && !snap.bt && !snap.bb) {
	// 		// }

	// 		// if (snap.ll) {
	// 		//     print("LL");
	// 		//     to.x = rect.x;
	// 		//     to.width = to.x + to.width - rect.x;
	// 		// }
	// 		// if (snap.rr) {
	// 		//     print("RR");
	// 		//     to.width = rect.x + rect.width - to.x;
	// 		// }
	// 		// if (snap.tt) {
	// 		//     print("TT");
	// 		//     to.y = rect.y;
	// 		//     to.height = to.y + to.height - rect.y;
	// 		// }
	// 		// if (snap.bb) {
	// 		//     print("BB");
	// 		//     to.height = rect.y + rect.height - to.y;
	// 		// }
	// 	}
	// }




	init();
})();