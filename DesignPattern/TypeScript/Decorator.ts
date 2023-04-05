interface Layer {
    getLayerId(): string;
}

interface Image {
    onLoad(): string;
}

class LayerComponent implements Layer {
    public getLayerId(): string {
        return 'getLayerId';
    }
}

class ImageComponent implements Image, Layer {
    public getLayerId(): string {
        return 'getLayerId';
    }

    public onLoad(): string {
        return 'onLoad';
    }
}

class LayerDecorator implements Layer {
    protected component: Layer;

    constructor(component: Layer) {
        this.component = component;
    }
  
    public getLayerId(): string {
        return this.component.getLayerId();
    }
}

class ImageDecorator implements Image, Layer{
    protected component: Image & Layer;

    constructor(component: Image & Layer) {
        this.component = component;
    }

    public getLayerId(): string {
        return this.component.getLayerId();
    }

    public onLoad(): string {
        return this.component.onLoad();
    }
}


class Model extends LayerDecorator {
    /**
     * Decorators may call parent implementation of the getLayerId, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
     public getLayerId(): string {
        // 공통 작업 + 추가 작업 하기
        return `Model(${super.getLayerId()})`;
    }

     public makeAudio(): string {
        return `makeAudio`;
    };
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class Images extends ImageDecorator {
     public getLayerId(): string {
        // 공통 작업 + 추가 작업 하기
        return `Images(${super.getLayerId()})`;
    }

    public onLoad(): string {
        // 공통 작업 + 추가 작업 하기
        return `Images(${super.onLoad()})`;
    };
}

class Background extends ImageDecorator {
     public getLayerId(): string {
        // 공통 작업 + 추가 작업 하기
        return `Background(${super.getLayerId()})`;
    }

     public onLoad(): string {
        // 공통 작업 + 추가 작업 하기
        return `Background(${super.onLoad()})`;
    };
}

function decoratorClientCode(component: Layer) {
    console.log(`RESULT: ${component.getLayerId()}`);
}

const layerComponent = new LayerComponent();
const imageComponent = new ImageComponent();

const model = new Model(layerComponent);
const iamge = new Images(imageComponent);
const background = new Background(iamge);

console.log('Client: Now I\'ve got a decorated component:');

console.log(`RESULT: ${model.getLayerId()}`);
console.log(`RESULT: ${background.onLoad()}`);
