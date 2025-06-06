export default Cubism2Model;
declare class Cubism2Model {
    live2DMgr: LAppLive2DManager;
    isDrawStart: boolean;
    gl: any;
    canvas: HTMLElement;
    dragMgr: L2DTargetPoint;
    viewMatrix: L2DViewMatrix;
    projMatrix: L2DMatrix44;
    deviceToScreen: L2DMatrix44;
    oldLen: number;
    _boundMouseEvent: any;
    _boundTouchEvent: any;
    initL2dCanvas(canvasId: any): void;
    init(canvasId: any, modelSettingPath: any, modelSetting: any): Promise<void>;
    destroy(): void;
    _drawFrameId: number;
    startDraw(): void;
    draw(): void;
    changeModel(modelSettingPath: any): Promise<void>;
    changeModelWithJSON(modelSettingPath: any, modelSetting: any): Promise<void>;
    modelScaling(scale: any): void;
    modelTurnHead(event: any): void;
    followPointer(event: any): void;
    lookFront(): void;
    mouseEvent(e: any): void;
    touchEvent(e: any): void;
    transformViewX(deviceX: any): number;
    transformViewY(deviceY: any): number;
    transformScreenX(deviceX: any): number;
    transformScreenY(deviceY: any): number;
}
import LAppLive2DManager from './LAppLive2DManager.js';
import { L2DTargetPoint } from './Live2DFramework.js';
import { L2DViewMatrix } from './Live2DFramework.js';
import { L2DMatrix44 } from './Live2DFramework.js';
