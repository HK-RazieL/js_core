function constructionCrew(input) {
    let worker = Object.create(input);

    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += 0.1 * worker.experience * worker.weight;
        worker.handsShaking = false;
    }

    return worker;
}

